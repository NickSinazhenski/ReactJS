import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCTACquCXHXcHTVtEeFch4gy9Do4eZ9-KE",
  authDomain: "react-lab-2a200.firebaseapp.com",
  projectId: "react-lab-2a200",
  storageBucket: "react-lab-2a200.firebasestorage.app",
  messagingSenderId: "478271064341",
  appId: "1:478271064341:web:b5262e7278e0ff26a2c11c",
  measurementId: "G-0N1YNFNVF2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);