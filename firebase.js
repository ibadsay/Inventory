// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaFIR9muDizk4MWuqcgI393u8kqTXjcrc",
  authDomain: "inventory-tracker-57fb9.firebaseapp.com",
  projectId: "inventory-tracker-57fb9",
  storageBucket: "inventory-tracker-57fb9.appspot.com",
  messagingSenderId: "315841521251",
  appId: "1:315841521251:web:93182cbeb8b7a8c28afa56",
  measurementId: "G-003RRTXJ1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}