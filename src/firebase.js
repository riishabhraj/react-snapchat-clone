import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlrRs8yIUu6jtCk7aH_-pSXeiazHkCigI",
  authDomain: "snapchat-clone-bd371.firebaseapp.com",
  projectId: "snapchat-clone-bd371",
  storageBucket: "snapchat-clone-bd371.appspot.com",
  messagingSenderId: "180297717915",
  appId: "1:180297717915:web:876bfcc1b47fea60d74e3e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default app;
export { db, auth, storage, provider };
