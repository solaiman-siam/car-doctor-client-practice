// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIi-NqXFPw0g_jtScGq_70OiNZ_l7bi7I",
  authDomain: "car-doctor-a4545.firebaseapp.com",
  projectId: "car-doctor-a4545",
  storageBucket: "car-doctor-a4545.appspot.com",
  messagingSenderId: "118856189445",
  appId: "1:118856189445:web:e19910b9d64702ae25be6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
