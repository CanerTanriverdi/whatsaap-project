import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ba63c.firebaseapp.com",
  projectId: "reactchat-ba63c",
  storageBucket: "reactchat-ba63c.firebasestorage.app",
  messagingSenderId: "26513283268",
  appId: "1:26513283268:web:dad2627045876a093b5191",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
