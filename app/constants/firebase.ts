import firebase from "firebase";
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'

import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGE_SENDER_ID,
    FIREBASE_ID
} from '@env';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
    appId: FIREBASE_ID
};

console.log(firebaseConfig);

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

const firestore = firebase.firestore

export {
    db,
    auth,
    storage,
    firestore
}