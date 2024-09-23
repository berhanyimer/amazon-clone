// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnUfjdYAih-X45KSZDrrhlqnQY7FNJ3-Y",
  authDomain: "clone-9cc69.firebaseapp.com",
  projectId: "clone-9cc69",
  storageBucket: "clone-9cc69.appspot.com",
  messagingSenderId: "142988292472",
  appId: "1:142988292472:web:2b26f112ab7d9e6739d88d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
