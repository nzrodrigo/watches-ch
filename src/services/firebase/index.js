import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBV8jTRqIEZ-nVksCLv4IDUEXtsVt20wvU",
  authDomain: "ecommerce1-d7b33.firebaseapp.com",
  projectId: "ecommerce1-d7b33",
  storageBucket: "ecommerce1-d7b33.appspot.com",
  messagingSenderId: "350962876248",
  appId: "1:350962876248:web:3de5b14edd293765cf2f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb= getFirestore(app);