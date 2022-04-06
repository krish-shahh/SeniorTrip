import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCA3dWBTHz7iRgGOB5o8d9xffD-TPIZXZM",
  authDomain: "shareme-339115.firebaseapp.com",
  databaseURL: "https://shareme-339115-default-rtdb.firebaseio.com",
  projectId: "shareme-339115",
  storageBucket: "shareme-339115.appspot.com",
  messagingSenderId: "779829024570",
  appId: "1:779829024570:web:2b97b096c5a5c43dcc2203",
  measurementId: "G-W1PV1DQPVX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };