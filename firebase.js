// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBys1SWRGBi5yd6lv9EKnoz9cfLZIAo20o",
  authDomain: "aaeriosoft.firebaseapp.com",
  projectId: "aaeriosoft",
  storageBucket: "aaeriosoft.firebasestorage.app",
  messagingSenderId: "515660093888",
  appId: "1:515660093888:web:60c7d3ca2cadf28053d025",
  measurementId: "G-0HHNFM42CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);