// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_QPa21qRuACFSZiq9iBHzJwmXnul3nvw",
  authDomain: "netflixgpt-f1619.firebaseapp.com",
  projectId: "netflixgpt-f1619",
  storageBucket: "netflixgpt-f1619.firebasestorage.app",
  messagingSenderId: "463630044041",
  appId: "1:463630044041:web:ddf9e2de38bf6f8981ef58",
  measurementId: "G-6SQYP8S7FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);