// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXY0zowyujxyE3shgdf4G30fikRWyBlZI",
  authDomain: "casadepaso-cd58e.firebaseapp.com",
  projectId: "casadepaso-cd58e",
  storageBucket: "casadepaso-cd58e.appspot.com",
  messagingSenderId: "338913470243",
  appId: "1:338913470243:web:278b54e9ba0a96ed4e4e96"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {db, auth};