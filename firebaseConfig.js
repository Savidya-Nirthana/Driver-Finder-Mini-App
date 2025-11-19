// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMw8RpMDTXLDyrwg-7xFT43G3vj6ixSiQ",
  authDomain: "driver-finder-5436f.firebaseapp.com",
  projectId: "driver-finder-5436f",
  storageBucket: "driver-finder-5436f.firebasestorage.app",
  messagingSenderId: "795620895948",
  appId: "1:795620895948:web:abbf2ab31b154b7958e669",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
export const auth = getAuth(app);
