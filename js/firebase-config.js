// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc, query, orderBy, serverTimestamp, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ВСТАВ СЮДИ СВОЇ ДАНІ З FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "AIzaSyB4KIEgI_84_hVQiJxEhjJ23BojhIsR3Dc",
    authDomain: "project-x-8e36c.firebaseapp.com",
    projectId: "project-x-8e36c",
    storageBucket: "project-x-8e36c.firebasestorage.app",
    messagingSenderId: "525692517972",
    appId: "1:525692517972:web:5dc457ee3b4b5bbd4fb7c1"
};

// Ініціалізація
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Експортуємо функції, щоб використовувати їх в інших файлах
export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, getDocs, addDoc, doc, setDoc, query, orderBy, serverTimestamp, getDoc };
