import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYaVrbpZczYOm2BdrxBNAi_qtDp_cDk2Q",
  authDomain: "furniture-store-b3aad.firebaseapp.com",
  projectId: "furniture-store-b3aad",
  storageBucket: "furniture-store-b3aad.appspot.com",
  messagingSenderId: "856433043537",
  appId: "1:856433043537:web:5ac66398a8ae02b5817070",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;
export { db };
