import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAef8qIjnu82MunJScf7VzoLq1F2bm9YQo",
    authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
    projectId: process.env.PROJECT_ID,
    storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
firebase.initializeApp(firebaseConfig);
export  const authService = firebase.auth()