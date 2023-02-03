
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAqTSI2kvOAGM3Ca5zww86Pw1erRGh5eI",
  authDomain: "chat-48dc2.firebaseapp.com",
  projectId: "chat-48dc2",
  storageBucket: "chat-48dc2.appspot.com",
  messagingSenderId: "779294000236",
  appId: "1:779294000236:web:8dd94576a50a1183b88449"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
