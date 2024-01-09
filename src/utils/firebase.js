// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDzEvHpB2tHUWZdaG7E7xNgfhGkVpFJEs",
  authDomain: "netflix-gpt-aec48.firebaseapp.com",
  projectId: "netflix-gpt-aec48",
  storageBucket: "netflix-gpt-aec48.appspot.com",
  messagingSenderId: "171016609008",
  appId: "1:171016609008:web:0a749dc7beed8d9ee3b635",
  measurementId: "G-09LZWVQ1ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);