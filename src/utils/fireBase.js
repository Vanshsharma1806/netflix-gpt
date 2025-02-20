// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANccjXY7v3AL6t2X0mnP1yP43gwGyolLQ",
  authDomain: "netflixgpt-d044f.firebaseapp.com",
  projectId: "netflixgpt-d044f",
  storageBucket: "netflixgpt-d044f.firebasestorage.app",
  messagingSenderId: "314499748429",
  appId: "1:314499748429:web:ddebb67063af6896ef4204",
  measurementId: "G-KSRZLLYRFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
