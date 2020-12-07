import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyAef8qIjnu82MunJScf7VzoLq1F2bm9YQo",
  authDomain: "quotes-6d35f.firebaseapp.com",
  databaseURL: "https://quotes-6d35f.firebaseio.com",
  projectId: "quotes-6d35f",
  storageBucket: "quotes-6d35f.appspot.com",
  messagingSenderId: "419429076627",
  appId: "1:419429076627:web:b624052634b1dbdf980766",
  measurementId: "G-H46M93ZX50"
};
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const db = firebase.firestore()