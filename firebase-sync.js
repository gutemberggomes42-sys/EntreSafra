import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
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
  audit: "entressafra-v1-audit"
};
const CLOUD_STAMP = "entressafra-firebase-updated-at";
let timer = null;
let pendingSync = false;
let applyingRemote = false;
let workspaceRef = null;
let auth = null;
let unsubscribeSnapshot = null;
let authStateResolved = false;

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
    try { payload[field] = JSON.parse(localStorage.getItem(key)) ?? (field === "patches" || field === "additions" ? {} : []); }
    catch { payload[field] = field === "patches" || field === "additions" ? {} : []; }
  });
  return payload;
}

function applyRemote(data) {
  applyingRemote = true;
  Object.entries(KEYS).forEach(([field,key]) => {
    if (data[field] !== undefined) localStorage.setItem(key, JSON.stringify(data[field]));
  });
  localStorage.setItem(CLOUD_STAMP, String(data.updatedAtMs || Date.now()));
  applyingRemote = false;
}

async function pushNow() {
  if (applyingRemote) return;
  if (!workspaceRef) { pendingSync = true; return; }
  const updatedAtMs = Date.now();
  setStatus("Sincronizando com Firebase...", "syncing");
  try {
    await setDoc(workspaceRef, { ...readLocal(), updatedAtMs, updatedBy: navigator.userAgent.slice(0,120), schemaVersion: 2 });
    pendingSync = false;
    localStorage.setItem(CLOUD_STAMP, String(updatedAtMs));
    setStatus("Firebase sincronizado", "online");
  } catch (error) {
    console.warn("Firebase: não foi possível salvar.", error.code || error.message);
    setStatus("Offline · alterações preservadas", "offline");
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
      const localStamp = Number(localStorage.getItem(CLOUD_STAMP) || 0);
      if ((remote.updatedAtMs || 0) > localStamp) applyRemote(remote);
    } else {
      await pushNow();
    }
    setStatus("Firebase conectado", "online");
    unsubscribeSnapshot?.();
    unsubscribeSnapshot = onSnapshot(workspaceRef, snap => {
      if (!snap.exists()) return;
      const remote = snap.data();
      const localStamp = Number(localStorage.getItem(CLOUD_STAMP) || 0);
      if ((remote.updatedAtMs || 0) > localStamp) {
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
    else { unsubscribeSnapshot?.(); unsubscribeSnapshot=null; workspaceRef=null; window.FirebaseSync.connected=false; setStatus("Login necessário para sincronizar", "offline"); window.__resolveFirebaseSync?.(false); }
  });
}

start().catch(error => { console.warn("Firebase Auth indisponível.",error.code||error.message); setStatus("Offline · dados locais ativos","offline"); window.__resolveFirebaseSync?.(false); });
