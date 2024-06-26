require('dotenv');
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);
// const analytics = getAnalytics(app);