import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDDoBW4swSnMsK9uHlk7B4qxpzoko7lbL0",
  authDomain: "chatapphasbihal.firebaseapp.com",
  projectId: "chatapphasbihal",
  storageBucket: "chatapphasbihal.appspot.com",
  messagingSenderId: "437765645230",
  appId: "1:437765645230:web:eb95aff479372ca5d21e3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
