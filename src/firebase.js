// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTr4-f4JvHPEPj2dTL1tKXS3vFuhkuSk4",
  authDomain: "flashcard-kanas.firebaseapp.com",
  projectId: "flashcard-kanas",
  storageBucket: "flashcard-kanas.appspot.com",
  messagingSenderId: "923872208832",
  appId: "1:923872208832:web:31fdbe5151b6c4da96ca25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
