// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0M_8URzHq2nl2B2iEG1jh39PExXg358",
  authDomain: "bloomstead-farms.firebaseapp.com",
  projectId: "bloomstead-farms",
  storageBucket: "bloomstead-farms.firebasestorage.app",
  messagingSenderId: "497146939728",
  appId: "1:497146939728:web:b8e9060180125ce76a4455",
  measurementId: "G-VYG747QV8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);