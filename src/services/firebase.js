import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBsGcq8gHhYC30Uj2RhjvS4YSoP9fFEzyw",
    authDomain: "react-dev-skills-56228.firebaseapp.com",
    projectId: "react-dev-skills-56228",
    storageBucket: "react-dev-skills-56228.appspot.com",
    messagingSenderId: "624710490709",
    appId: "1:624710490709:web:30b29e35e60cd4f9d412dc"
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

export {
    auth,
    signIn,
    logOut,
}

