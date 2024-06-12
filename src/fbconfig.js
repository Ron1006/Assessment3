// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNKaQaOg-2t04Gqqsa0XxPD7asYwbKO4",
  authDomain: "assessment3-scp.firebaseapp.com",
  projectId: "assessment3-scp",
  storageBucket: "assessment3-scp.appspot.com",
  messagingSenderId: "311095379805",
  appId: "1:311095379805:web:0894c01a8d4cca08500ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);