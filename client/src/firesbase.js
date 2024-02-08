// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sam-realestate.firebaseapp.com",
  projectId: "sam-realestate",
  storageBucket: "sam-realestate.appspot.com",
  messagingSenderId: "664371947047",
  appId: "1:664371947047:web:470c9d14c6da28f7729002"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);