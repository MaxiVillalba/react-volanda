import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBOtFLmelUEmL00vFDyxXj1GpNR5l8lYIo",
  authDomain: "react-volanda.firebaseapp.com",
  projectId: "react-volanda",
  storageBucket: "react-volanda.firebasestorage.app",
  messagingSenderId: "1031733570307",
  appId: "1:1031733570307:web:4ec8bd95e2c48377131736"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export default db