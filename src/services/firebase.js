import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABBm35QpoHRfZa-bOm11rifDRxke4H42I",
    authDomain: "untangle-98fed.firebaseapp.com",
    projectId: "untangle-98fed",
    storageBucket: "untangle-98fed.appspot.com",
    messagingSenderId: "850804662588",
    appId: "1:850804662588:web:24f816ada9f69e3d313e39"
  };
  
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function signIn() {
    auth.signInWithPopup(provider);
}

function logOut() {
    auth.signOut();
}

function createUserWithPassword(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
}

function signInWithPassword(email, password) {
    auth.signInWithEmailAndPassword(email, password)
}


export {
    auth,
    signIn,
    logOut,
    createUserWithPassword,
    signInWithPassword,
}

