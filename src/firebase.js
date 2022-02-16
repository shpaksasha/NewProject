import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_SECRET_CODE_1,
    authDomain: process.env.REACT_APP_FIREBASE_SECRET_CODE_2,
    projectId: process.env.REACT_APP_FIREBASE_SECRET_CODE_3,
    storageBucket: process.env.REACT_APP_FIREBASE_SECRET_CODE_4,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SECRET_CODE_5,
    appId: process.env.REACT_APP_FIREBASE_SECRET_CODE_6
};

const app = initializeApp(firebaseConfig)

// const db = firebase.firestore();
//
// export {db};
