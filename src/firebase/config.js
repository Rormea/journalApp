// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkZvm-nZ5swbqMY6_98Xh8WOGbuibiaQg",
    authDomain: "cursos--react.firebaseapp.com",
    projectId: "cursos--react",
    storageBucket: "cursos--react.appspot.com",
    messagingSenderId: "1020821677782",
    appId: "1:1020821677782:web:79a0ed533e812caa248b77"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
