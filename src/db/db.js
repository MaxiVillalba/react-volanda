import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "react-volanda.firebasestorage.app",
  messagingSenderId: "1031733570307",
  appId: "1:1031733570307:web:4ec8bd95e2c48377131736"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
