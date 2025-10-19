// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHtQj3x_F4MNGSplJaev3wTYAM-dokJlo",
  authDomain: "dragon-news-f0b46.firebaseapp.com",
  projectId: "dragon-news-f0b46",
  storageBucket: "dragon-news-f0b46.firebasestorage.app",
  messagingSenderId: "532043160765",
  appId: "1:532043160765:web:8380cfd9c6e85746a26bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;