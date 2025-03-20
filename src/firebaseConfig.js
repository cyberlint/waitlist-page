import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config fire
const firebaseConfig = {
  apiKey: "AIzaSyB_DG37ECrHKqQTDBTQFPn3WBxU5gYNm4I",
  authDomain: "waitlist-19a6b.firebaseapp.com",
  projectId: "waitlist-19a6b",
  storageBucket: "waitlist-19a6b.appspot.com",
  messagingSenderId: "673335333563",
  appId: "1:673335333563:web:2de754f7015c3b12788f9e",
};

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
