import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI6Fh_C9ANCnxOBCnMVsTbZbNymshLVQ0",
  authDomain: "clone-twitter-d5fe7.firebaseapp.com",
  projectId: "clone-twitter-d5fe7",
  storageBucket: "clone-twitter-d5fe7.appspot.com",
  messagingSenderId: "922616890112",
  appId: "1:922616890112:web:dc765c90578c963de629e5",
  measurementId: "G-YP0VYG8P35",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
