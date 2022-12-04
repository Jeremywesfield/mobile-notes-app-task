import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { saveData } from "../asyncStorage/write";
import { apiKey, authDomain } from '@env'

export function login(email, password, appContext) {
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: "mobile-notes-app",
    storageBucket: "mobile-notes-app.appspot.com",
    messagingSenderId: "173645962920",
    appId: "1:173645962920:web:dcae5907c401a4e8df2c9d",
    measurementId: "G-RQCJCMFXW2",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveData({ userName: user.displayName, isLoggedIn: true }, true);
        appContext.setUser(user.displayName)        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Error logging in, please try again!")
      });
}


