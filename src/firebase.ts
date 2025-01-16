
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLYBaKfu-gBYJe2Pi1o4qdfaRnNaRlpUU",
    authDomain: "faves-landing.firebaseapp.com",
    projectId: "faves-landing",
    storageBucket: "faves-landing.firebasestorage.app",
    messagingSenderId: "830693430014",
    appId: "1:830693430014:web:9e4b0f7f3e5725ed9a4baf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app)

