
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiRrm6wvoXEqm7DQ9WRBmSzoKLPGxPTS8",
  authDomain: "todo-list-57225.firebaseapp.com",
  projectId: "todo-list-57225",
  storageBucket: "todo-list-57225.firebasestorage.app",
  messagingSenderId: "28156474799",
  appId: "1:28156474799:web:93e5a050bd917193faab5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };