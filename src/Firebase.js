 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQ5trVvfoHHbM9VPNfd8P6VHk41IdR3g",
  authDomain: "blog-app-b7b7e.firebaseapp.com",
  projectId: "blog-app-b7b7e",
  storageBucket: "blog-app-b7b7e.firebasestorage.app",
  messagingSenderId: "638745777854",
  appId: "1:638745777854:web:10d687cd5f3131c190b0ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);