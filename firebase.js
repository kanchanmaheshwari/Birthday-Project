import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import {getDatabase, child, ref, get, set} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCIrTyyc1E1bn9dobDz7I5ydtQlErprNjU",
    authDomain: "birthday-assignment.firebaseapp.com",
    databaseURL: "https://birthday-assignment-default-rtdb.firebaseio.com",
    projectId: "birthday-assignment",
    storageBucket: "birthday-assignment.appspot.com",
    messagingSenderId: "155827198627",
    appId: "1:155827198627:web:3d679c9525f715b0033d16"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getDatabase(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, child, ref, get, set}
        


  