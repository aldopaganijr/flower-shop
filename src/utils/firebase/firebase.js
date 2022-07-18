import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFO5v8FWN2Mc6MX5BuF8Tii2qNPrAsjr0",
    authDomain: "watch-store-79eed.firebaseapp.com",
    projectId: "watch-store-79eed",
    storageBucket: "watch-store-79eed.appspot.com",
    messagingSenderId: "333908719605",
    appId: "1:333908719605:web:8303b585a900ca61f992bc"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });

      } catch (error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  }