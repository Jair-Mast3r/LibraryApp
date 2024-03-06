// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkY5mphVZ8oRCxHgUAQa5oOdzyIXZEgo",
  authDomain: "devzone-shared-booksapp.firebaseapp.com", 
  projectId: "devzone-shared-booksapp",
  storageBucket: "devzone-shared-booksapp.appspot.com",
  messagingSenderId: "796904826810",
  appId: "1:796904826810:web:6f85fdf56320448f155f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);