// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjt9XHWxY1HvS_MA7eUs1EYNKrA3sPAFU",
  authDomain: "eventmngttheme.firebaseapp.com",
  projectId: "eventmngttheme",
  storageBucket: "eventmngttheme.appspot.com",
  messagingSenderId: "534151449599",
  appId: "1:534151449599:web:281f6142d080340adab5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;