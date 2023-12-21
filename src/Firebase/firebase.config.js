// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC_IGHFxTKv3ve83-F8h5jN9EpHrqALc4",
  authDomain: "zen-tasker.firebaseapp.com",
  projectId: "zen-tasker",
  storageBucket: "zen-tasker.appspot.com",
  messagingSenderId: "32891966291",
  appId: "1:32891966291:web:a797b3bf0032b3acf307a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;