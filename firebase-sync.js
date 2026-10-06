import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, doc, getDoc, onSnapshot, runTransaction } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIHq5c1u4NNShF1sj2Fb0TC2uO4X8OWOw",
  authDomain: "entresafra-17974.firebaseapp.com",
  projectId: "entresafra-17974",
  storageBucket: "entresafra-17974.firebasestorage.app",
  messagingSenderId: "995349313182",
  appId: "1:995349313182:web:95bccc71a2abff93fd2d8f",
  measurementId: "G-0JBBR7CC65"
};

const KEYS = {
  patches: "entressafra-v1-patches",
  additions: "entressafra-v1-new",
  deleted: "entressafra-v1-deleted",
  teams: "entressafra-v1-teams",
  installations: "entressafra-v1-axiagro-installations",
  audit: "entressafra-v1-audit",
  deletedTeams: "entressafra-v1-deleted-teams"
};
const CLOUD_REVISION = "entressafra-firebase-revision";
const CLIENT_ID = "entressafra-firebase-client-id";
let timer = null;
let pendingSync = false;
let retryCount = 0;
let applyingRemote = false;
let workspaceRef = null;
let auth = null;
let unsubscribeSnapshot = null;
let authStateResolved = false;

function clientId() {
  let id = localStorage.getItem(CLIENT_ID);
  if (!id) { id = crypto.randomUUID(); localStorage.setItem(CLIENT_ID, id); }
  return id;
}

function setStatus(text, mode = "online") {
  const label = document.querySelector("#cloudStatusText");
  const dot = document.querySelector("#cloudStatusDot");
  if (label) label.textContent = text;
  if (dot) dot.dataset.mode = mode;
}

function setUser(user) {
  const button = document.querySelector("#authButton");
  if (!button) return;
  button.textContent = user ? user.email : "Entrar";
  button.title = user ? "Sair da conta Firebase" : "Entrar para sincronizar";
  button.dataset.authenticated = user ? "true" : "false";
}

function authMessage(error) {
  const code = error?.code || "";
  if (code.includes("invalid-credential")) return "E-mail ou senha incorretos.";
  if (code.includes("email-already-in-use")) return "Este e-mail já possui cadastro.";
  if (code.includes("weak-password")) return "A senha precisa ter pelo menos 6 caracteres.";
  if (code.includes("operation-not-allowed")) return "Ative o provedor E-mail/Senha no Firebase Authentication.";
  return "Não foi possível autenticar. Verifique os dados e tente novamente.";
}

function readLocal() {
  const payload = {};
  Object.entries(KEYS).forEach(([field,key]) => {
    try { payload[field] = JSON.parse(localStorage.getItem(key)) ?? (["patches", "additions"].includes(field) ? {} : []); }
    catch { payload[field] = ["patches", "additions"].includes(field) ? {} : []; }
  });
  return payload;
}

function applyRemote(data) {
  applyingRemote = true;
  Object.entries(KEYS).forEach(([field,key]) => {
    if (data[field] !== undefined) localStorage.setItem(key, JSON.stringify(data[field]));
  });
  localStorage.setItem(CLOUD_REVISION, String(data.revision || 0));
  applyingRemote = false;
}

function mergeMap(remote = {}, local = {}) {
  const result = { ...remote };
  Object.entries(local).forEach(([id, value]) => {
    const previous = result[id] || {}; const merged = { ...previous };
    Object.entries(value || {}).forEach(([field, next]) => {
      if (field === "_syncFieldAt") return;
      const previousTime = Date.parse(previous._syncFieldAt?.[field] || "") || 0;
      const nextTime = Date.parse(value._syncFieldAt?.[field] || "") || 0;
      if (!(field in previous) || (nextTime > 0 && nextTime >= previousTime)) merged[field] = next;
    });
    merged._syncFieldAt = { ...(previous._syncFieldAt || {}), ...(value?._syncFieldAt || {}) };
    result[id] = merged;
  });
  return result;
}

function mergeById(remote = [], local = [], deleted = new Set()) {
  const result = new Map((remote || []).filter(item => item?.id && !deleted.has(item.id)).map(item => [item.id, item]));
  (local || []).forEach(item => {
    if (!item?.id || deleted.has(item.id)) return;
    const previous = result.get(item.id);
    if (!previous) result.set(item.id, item);
    else {
      const prevTime = Date.parse(previous.updatedAt || previous.createdAt || "") || 0;
      const nextTime = Date.parse(item.updatedAt || item.createdAt || "") || 0;
      result.set(item.id, nextTime >= prevTime ? { ...previous, ...item } : { ...item, ...previous });
    }
  });
  return [...result.values()];
}

function mergeWorkspace(remote = {}, local = {}) {
  const deleted = [...new Set([...(remote.deleted || []), ...(local.deleted || [])])];
  const deletedTeams = [...new Set([...(remote.deletedTeams || []), ...(local.deletedTeams || [])])];
  return {
    patches: mergeMap(remote.patches, local.patches),
    additions: Object.fromEntries([...new Set([...Object.keys(remote.additions || {}), ...Object.keys(local.additions || {})])].map(module => [module, mergeById(remote.additions?.[module], local.additions?.[module], new Set(deleted))])),
    deleted,
    deletedTeams,
    teams: mergeById(remote.teams, local.teams, new Set(deletedTeams)),
    installations: mergeById(remote.installations, local.installations),
    audit: mergeById(remote.audit, local.audit).sort((a,b) => (Date.parse(b.at || b.createdAt || "") || 0) - (Date.parse(a.at || a.createdAt || "") || 0)).slice(0,300)
  };
}

async function pushNow() {
  if (applyingRemote) return;
  if (!workspaceRef) { pendingSync = true; return; }
  setStatus("Sincronizando com Firebase...", "syncing");
  try {
    const local = readLocal();
    let committed;
    await runTransaction(workspaceRef.firestore, async transaction => {
      const snapshot = await transaction.get(workspaceRef);
      const remote = snapshot.exists() ? snapshot.data() : {};
      const merged = mergeWorkspace(remote, local);
      committed = { ...merged, revision: (Number(remote.revision) || 0) + 1, updatedAt: new Date().toISOString(), updatedBy: window.FirebaseSync?.user?.uid || clientId(), schemaVersion: 3 };
      transaction.set(workspaceRef, committed);
    });
    pendingSync = false;
    retryCount = 0;
    localStorage.setItem(CLOUD_REVISION, String(committed.revision));
    setStatus("Firebase sincronizado", "online");
  } catch (error) {
    console.warn("Firebase: não foi possível salvar.", error.code || error.message);
    setStatus("Falha ao sincronizar · tentando novamente", "offline");
    retryCount += 1;
    clearTimeout(timer); timer = setTimeout(pushNow, Math.min(60000, 1500 * (2 ** Math.min(retryCount, 6))));
  }
}

function queue() {
  if (applyingRemote) return;
  pendingSync = true;
  clearTimeout(timer);
  timer = setTimeout(pushNow, 700);
}

async function startFirestore(app, user) {
  try {
    const db = getFirestore(app);
    workspaceRef = doc(db, "entressafra", "workspace");
    const snapshot = await Promise.race([getDoc(workspaceRef), new Promise((_,reject)=>setTimeout(()=>reject(new Error("Tempo limite de conexão")),8000))]);
    if (snapshot.exists()) {
      const remote = snapshot.data();
      const localRevision = Number(localStorage.getItem(CLOUD_REVISION) ?? -1);
      if ((remote.revision || 0) > localRevision) applyRemote(remote);
    } else {
      await pushNow();
    }
    setStatus("Firebase conectado", "online");
    unsubscribeSnapshot?.();
    unsubscribeSnapshot = onSnapshot(workspaceRef, snap => {
      if (!snap.exists()) return;
      const remote = snap.data();
      const localRevision = Number(localStorage.getItem(CLOUD_REVISION) ?? -1);
      if ((remote.revision || 0) > localRevision) {
        applyRemote(remote);
        setStatus("Dados atualizados pela nuvem", "online");
        setTimeout(() => location.reload(), 400);
      }
    }, error => {
      console.warn("Firebase: sincronização em tempo real indisponível.", error.code || error.message);
      setStatus("Offline · dados locais ativos", "offline");
    });
    window.FirebaseSync.connected = true;
    window.__resolveFirebaseSync?.(true);
    if (pendingSync) queue();
  } catch (error) {
    console.warn("Firebase: conexão indisponível.", error.code || error.message);
    setStatus("Offline · dados locais ativos", "offline");
    window.FirebaseSync.connected = false;
    window.__resolveFirebaseSync?.(false);
  }
}

async function start() {
  const app = initializeApp(firebaseConfig);
  if (await isSupported()) getAnalytics(app);
  auth = getAuth(app);
  window.FirebaseSync = { queue, pushNow, connected: false, user: null };
  document.querySelector("#authButton")?.addEventListener("click", async () => {
    if (auth.currentUser) {
      await signOut(auth); setStatus("Sessão encerrada · dados locais ativos", "offline");
    } else document.querySelector("#authDialog")?.showModal();
  });
  document.querySelector("#authForm")?.addEventListener("submit", async event => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const error = document.querySelector("#authError"); error.textContent = "";
    try { await signInWithEmailAndPassword(auth, form.get("email"), form.get("password")); document.querySelector("#authDialog")?.close(); }
    catch (reason) { error.textContent = authMessage(reason); }
  });
  document.querySelector("#registerButton")?.addEventListener("click", async () => {
    const form = new FormData(document.querySelector("#authForm")); const error = document.querySelector("#authError"); error.textContent = "";
    if (!form.get("email") || !form.get("password")) { error.textContent = "Informe o e-mail e a senha do primeiro usuário."; return; }
    try { await createUserWithEmailAndPassword(auth, form.get("email"), form.get("password")); document.querySelector("#authDialog")?.close(); }
    catch (reason) { error.textContent = authMessage(reason); }
  });
  onAuthStateChanged(auth, user => {
    window.FirebaseSync.user = user || null; setUser(user);
    if (!authStateResolved) { authStateResolved = true; window.__resolveFirebaseAuth?.(!!user); }
    if (user) { setStatus("Autenticado · conectando...", "syncing"); startFirestore(app,user); if (window.__entressafraAuthLocked) location.reload(); }
    else { unsubscribeSnapshot?.(); unsubscribeSnapshot=null; workspaceRef=null; window.FirebaseSync.connected=false; setStatus("Login necessário para sincronizar", "offline"); window.__resolveFirebaseSync?.(false); if (window.__entressafraAppReady) location.reload(); }
  });
}

start().catch(error => { console.warn("Firebase Auth indisponível.",error.code||error.message); setStatus("Offline · dados locais ativos","offline"); window.__resolveFirebaseSync?.(false); });
