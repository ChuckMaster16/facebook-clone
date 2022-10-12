import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAKm1QPvfB46F49jtkXtXbEL43ap7cFwM0",
  authDomain: "facebook-clone-36935.firebaseapp.com",
  projectId: "facebook-clone-36935",
  storageBucket: "facebook-clone-36935.appspot.com",
  messagingSenderId: "497508259992",
  appId: "1:497508259992:web:454d6ebc95490d6efd98ed",
  measurementId: "G-S6MJRCY8PT"
};
const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Initialize Firebase



// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const storage = firebase.storage()
export {db,storage };
