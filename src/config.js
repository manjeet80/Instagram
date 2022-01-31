// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5o0aDcBrgp0f8HmgU34HlbwHUlCrt9AA",
  authDomain: "instagram-82546.firebaseapp.com",
  projectId: "instagram-82546",
  storageBucket: "instagram-82546.appspot.com",
  messagingSenderId: "872290229806",
  appId: "1:872290229806:web:78f8d27252f3c771b009bf",
  measurementId: "G-SF40KZJSTJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
