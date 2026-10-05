import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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
  audit: "entressafra-v1-audit"
};
const CLOUD_STAMP = "entressafra-firebase-updated-at";
let timer = null;
let applyingRemote = false;
let workspaceRef = null;

function setStatus(text, mode = "online") {
  const label = document.querySelector("#cloudStatusText");
  const dot = document.querySelector("#cloudStatusDot");
  if (label) label.textContent = text;
  if (dot) dot.dataset.mode = mode;
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
  if (!workspaceRef || applyingRemote) return;
  const updatedAtMs = Date.now();
  setStatus("Sincronizando com Firebase...", "syncing");
  try {
    await setDoc(workspaceRef, { ...readLocal(), updatedAtMs, updatedBy: navigator.userAgent.slice(0,120), schemaVersion: 2 });
    localStorage.setItem(CLOUD_STAMP, String(updatedAtMs));
    setStatus("Firebase sincronizado", "online");
  } catch (error) {
    console.warn("Firebase: não foi possível salvar.", error.code || error.message);
    setStatus("Offline · alterações preservadas", "offline");
  }
}

function queue() {
  if (applyingRemote) return;
  clearTimeout(timer);
  timer = setTimeout(pushNow, 700);
}

async function start() {
  try {
    const app = initializeApp(firebaseConfig);
    if (await isSupported()) getAnalytics(app);
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
    onSnapshot(workspaceRef, snap => {
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
    window.FirebaseSync = { queue, pushNow, connected: true };
    window.__resolveFirebaseSync?.(true);
  } catch (error) {
    console.warn("Firebase: conexão indisponível.", error.code || error.message);
    setStatus("Offline · dados locais ativos", "offline");
    window.FirebaseSync = { queue: () => {}, pushNow: async () => {}, connected: false };
    window.__resolveFirebaseSync?.(false);
  }
}

start();
