// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzqp4cOoLQb4c87IUrvvx0SAFoY9bhGU0",
  authDomain: "login-firebase-3bga---2026.firebaseapp.com",
  projectId: "login-firebase-3bga---2026",
  storageBucket: "login-firebase-3bga---2026.firebasestorage.app",
  messagingSenderId: "920668834818",
  appId: "1:920668834818:web:661b8db27cd060af706b1b",
  measurementId: "G-TD132V5LLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);