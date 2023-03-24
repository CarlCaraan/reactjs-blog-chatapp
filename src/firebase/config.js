import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiEM4X2_HQ-BQgHs6eNAP_uD6LWjZXi4g",
  authDomain: "reactjs-blog-chatapp.firebaseapp.com",
  projectId: "reactjs-blog-chatapp",
  storageBucket: "reactjs-blog-chatapp.appspot.com",
  messagingSenderId: "454616092518",
  appId: "1:454616092518:web:ec8029349a344bdc9182a7",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
