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

  // set up auth

  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();

  const signIn = () => {
      return signInWithPopup(auth, provider);
  };


  const logOut = () => {
    auth.signOut
  };

  export {
      auth, 
      signIn,
      logOut
  };


