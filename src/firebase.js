// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6PEhSL64QfqMSYYtS4z7e5oao_ghX7uc",
  authDomain: "app-libros-6a811.firebaseapp.com",
  projectId: "app-libros-6a811",
  storageBucket: "app-libros-6a811.appspot.com",
  messagingSenderId: "577197265907",
  appId: "1:577197265907:web:54085828f98d75d274b886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);