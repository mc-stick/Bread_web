// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZxEmSWLn393NLehsMqF2ciDI9OfVoqY",
  authDomain: "bread-e227f.firebaseapp.com",
  projectId: "bread-e227f",
  storageBucket: "bread-e227f.appspot.com",
  messagingSenderId: "510901306350",
  appId: "1:510901306350:web:04a119e27e4f3b63efc4ff",
  measurementId: "G-47FG4WBS3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);