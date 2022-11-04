// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm278PINksqXQZKg3esz954zZqy8nr73c",
    authDomain: "reactjs-instagram-clone-app.firebaseapp.com",
    projectId: "reactjs-instagram-clone-app",
    storageBucket: "reactjs-instagram-clone-app.appspot.com",
    messagingSenderId: "619176337354",
    appId: "1:619176337354:web:7696c79ac61e39afae7933",
    measurementId: "G-Z63882XV5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {auth};
export default db;