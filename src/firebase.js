import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCk4yw6vf2KJEByRnt0a0eSGIUJTNhumd0",
  authDomain: "fir-9080e.firebaseapp.com",
  projectId: "fir-9080e",
  storageBucket: "fir-9080e.appspot.com",
  messagingSenderId: "727000428080",
  appId: "1:727000428080:web:cb8b6ac4d9a23ab3c787f5",
  measurementId: "G-W91XZD6BDQ",
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
