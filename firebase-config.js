// 1. 必要な機能をインポート
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, setDoc, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 2. あなたのプロジェクト設定 (そのまま使用)
const firebaseConfig = {
  apiKey: "AIzaSyBnqE4g0Cs2ZUBgq4bX2_W9Jrl4vGXT3UA",
  authDomain: "concil-hub.firebaseapp.com",
  projectId: "concil-hub",
  storageBucket: "concil-hub.firebasestorage.app",
  messagingSenderId: "611994338432",
  appId: "1:611994338432:web:1f785adba95b16c29cd265"
};

// 3. Firebaseの初期化
const app = initializeApp(firebaseConfig);

// ▼▼▼【重要】ここから下が足りていませんでした ▼▼▼

// 認証機能とデータベース機能の準備
const auth = getAuth(app);
const db = getFirestore(app);

// 4. 他のファイル(index.htmlなど)で機能を使えるようにエクスポート
export { 
    auth, 
    db, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    doc, 
    setDoc, 
    query, 
    where 
};
