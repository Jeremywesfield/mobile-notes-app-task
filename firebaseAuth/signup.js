import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { saveData } from '../asyncStorage/write';

export function userSignUp({ newUser, appContext }) {

    const { userName, email, password } = newUser || {};
  
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHbP4YBQOSv5-EneRK7cm5IFIzAsy22KU",
    authDomain: "mobile-notes-app.firebaseapp.com",
    projectId: "mobile-notes-app",
    storageBucket: "mobile-notes-app.appspot.com",
    messagingSenderId: "173645962920",
    appId: "1:173645962920:web:dcae5907c401a4e8df2c9d",
    measurementId: "G-RQCJCMFXW2",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        updateProfile(auth.currentUser, {
            displayName: userName
          }).then(() => {
            saveData({ userName, isLoggedIn: true }, true)
            appContext.setUser(userName)
          }).catch((error) => {
            return 'error'
          });
          
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error signing up, please try again!")
    });

    
  
}