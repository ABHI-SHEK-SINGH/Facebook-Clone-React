
import harsh from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FacebookAuthProvider } from "firebase/auth";
import 'firebase/storage'; 
import "firebase/compat/storage";

const firebaseConfig = harsh.initializeApp({
    apiKey: "AIzaSyCz_F8UceV7_HTvVHlVbAWA1Iz2a44nYq0",
    authDomain: "fb-clone-ee422.firebaseapp.com",
    projectId: "fb-clone-ee422",
    storageBucket: "fb-clone-ee422.appspot.com",
    messagingSenderId: "493623538499",
    appId: "1:493623538499:web:02330e9d15617adacf35f6"
  });
    
// Initialize Firebase
const auth = harsh.auth();

const provider = new FacebookAuthProvider();

const db = firebaseConfig.firestore();

const storageRef = harsh.storage();

export {auth, provider,db,storageRef}