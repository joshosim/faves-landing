
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlkFeeevdtDI51I20JMPymJ6RXSzojjuE",
    authDomain: "landing-saas-cced7.firebaseapp.com",
    projectId: "landing-saas-cced7",
    storageBucket: "landing-saas-cced7.firebasestorage.app",
    messagingSenderId: "665034852983",
    appId: "1:665034852983:web:c5b4452f66e56d8e379472"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app)

