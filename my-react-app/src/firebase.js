// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database"; // If you need realtime database
import "firebase/storage"; // If you need cloud storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABTToZJ5XUK_DV6a3pRrET0AyhpiY-ePI",
    authDomain: "megaworldproject-b4ba8.firebaseapp.com",
    projectId: "megaworldproject-b4ba8",
    storageBucket: "megaworldproject-b4ba8.appspot.com",
    messagingSenderId: "957251123382",
    appId: "1:957251123382:web:736b52013594b472584e17",
    measurementId: "G-W3QR87NN8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);