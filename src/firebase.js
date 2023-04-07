import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWMRy0Z5GUfsNx5g2tqqLiobyLPGyv5FU",
  authDomain: "chat-dbdb9.firebaseapp.com",
  projectId: "chat-dbdb9",
  storageBucket: "chat-dbdb9.appspot.com",
  messagingSenderId: "731991699875",
  appId: "1:731991699875:web:1142f51b140f4013b02a16",
  measurementId: "G-64BZF2BEHF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();