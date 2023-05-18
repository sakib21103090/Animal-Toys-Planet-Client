// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUlRjfXSLaWOGLife3lDXCZcrt00pKBU",
  authDomain: "animal-toys-planet.firebaseapp.com",
  projectId: "animal-toys-planet",
  storageBucket: "animal-toys-planet.appspot.com",
  messagingSenderId: "427983702257",
  appId: "1:427983702257:web:f5dc6a51847bcc8aa08150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;