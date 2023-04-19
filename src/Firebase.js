import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf-89_IeGuNjq0nK6mWOYtKFZ3Q-MI2hk",
  authDomain: "team--project.firebaseapp.com",
  projectId: "team--project",
  storageBucket: "team--project.appspot.com",
  messagingSenderId: "700831898030",
  appId: "1:700831898030:web:9e73930a4a63e2b700903f",
  measurementId: "G-H65DX1GW2E"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };