import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa1YQuiLWO9XEZZoCWGl9VIfPTRpnj4JE",
  authDomain: "react-dev-a5692.firebaseapp.com",
  projectId: "react-dev-a5692",
  storageBucket: "react-dev-a5692.appspot.com",
  messagingSenderId: "800553349367",
  appId: "1:800553349367:web:87171d875bd5a4ff3123f2",
  measurementId: "G-YY9VMCCTTT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
/* 
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()
export const auth = firebase.auth() 
 */
