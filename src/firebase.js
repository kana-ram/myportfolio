// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOQdIADZDPC6CPZu1PRU260ykpolV9mVU",
  authDomain: "kanaramportfolio-d1165.firebaseapp.com",
  projectId: "kanaramportfolio-d1165",
  storageBucket: "kanaramportfolio-d1165.firebasestorage.app",
  messagingSenderId: "36670551626",
  appId: "1:36670551626:web:48750a7e7bbb04e2ff58b3",
  measurementId: "G-C0D0RF2REZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
