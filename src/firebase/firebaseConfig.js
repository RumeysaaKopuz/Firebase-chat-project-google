// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA44BBbTJ4p3iym9Ug1qkHxGixL0nNebZI",
  authDomain: "hi-chat-cf562.firebaseapp.com",
  projectId: "hi-chat-cf562",
  storageBucket: "hi-chat-cf562.appspot.com",
  messagingSenderId: "524281310186",
  appId: "1:524281310186:web:4b7f7c4a7a16f78b5ce093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirme icin gerekli olan kurulum 
export const auth = getAuth(app);

// google saglayicisi kurulum 
export const provider = new GoogleAuthProvider();

//veritabani kurulumu 
export const db = getFirestore(app)