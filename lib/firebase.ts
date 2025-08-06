// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1drjl98UjE9ZP1d2f1FPu91bC-mmPua4",
  authDomain: "abdo-d90d8.firebaseapp.com",
  projectId: "abdo-d90d8",
  storageBucket: "abdo-d90d8.firebasestorage.app",
  messagingSenderId: "876685613975",
  appId: "1:876685613975:web:6c52ab089bb5e9481602d2",
  measurementId: "G-9KRG5LNW1B",
};

// Initialize Firebase app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const db = getFirestore(app);

// Optional: initialize Analytics (only on client side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };
