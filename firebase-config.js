// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, setDoc, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnqE4g0Cs2ZUBgq4bX2_W9Jrl4vGXT3UA",
  authDomain: "concil-hub.firebaseapp.com",
  projectId: "concil-hub",
  storageBucket: "concil-hub.firebasestorage.app",
  messagingSenderId: "611994338432",
  appId: "1:611994338432:web:1f785adba95b16c29cd265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
