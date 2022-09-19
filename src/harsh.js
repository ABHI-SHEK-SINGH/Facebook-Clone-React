
import harsh from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FacebookAuthProvider } from "firebase/auth";
import 'firebase/storage'; 
import "firebase/compat/storage";


    
// Initialize Firebase
const auth = harsh.auth();

const provider = new FacebookAuthProvider();

const db = firebaseConfig.firestore();

const storageRef = harsh.storage();

export {auth, provider,db,storageRef}
