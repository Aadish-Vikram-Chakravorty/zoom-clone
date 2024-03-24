// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKUQGrilzlBSjiTBgrW6_1EElm9YxzzwA",
  authDomain: "zoom-clone-5a973.firebaseapp.com",
  projectId: "zoom-clone-5a973",
  storageBucket: "zoom-clone-5a973.appspot.com",
  messagingSenderId: "281999414747",
  appId: "1:281999414747:web:00ec85f937ad8ef9ec03fe",
  measurementId: "G-5BDFQ3G8J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
