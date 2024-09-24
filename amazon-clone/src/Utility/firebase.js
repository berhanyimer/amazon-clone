// Use Firebase v8 compatibility imports
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // Import auth from compatibility layer
import "firebase/compat/firestore"; // Import firestore from compatibility layer

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCnUfjdYAih-X45KSZDrrhlqnQY7FNJ3-Y",
  authDomain: "clone-9cc69.firebaseapp.com",
  projectId: "clone-9cc69",
  storageBucket: "clone-9cc69.appspot.com",
  messagingSenderId: "142988292472",
  appId: "1:142988292472:web:2b26f112ab7d9e6739d88d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore using v8 APIs
const auth = firebase.auth(); // Use the v8-style API for auth
const db = firebase.firestore(); // Use the v8-style API for Firestore

export { auth, db };
