// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwp_v4MgSCDE_r9lsbnMcd8jX_wb2YIxk",
  authDomain: "fir-login-react-858ca.firebaseapp.com",
  projectId: "fir-login-react-858ca",
  storageBucket: "fir-login-react-858ca.appspot.com",
  messagingSenderId: "824819550535",
  appId: "1:824819550535:web:058fcbae64a4d2bec42462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
