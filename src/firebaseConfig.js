// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd4cTnh-VM95x_a40zjlaPAc-W-MYjg_E",
    authDomain: "reactauth-26f2f.firebaseapp.com",
    projectId: "reactauth-26f2f",
    storageBucket: "reactauth-26f2f.firebasestorage.app",
    messagingSenderId: "905878316883",
    appId: "1:905878316883:web:48ae7a850c265c039ca3a6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };