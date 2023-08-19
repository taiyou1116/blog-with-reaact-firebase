import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMlk6MUnMJcoYO_CpTwFgWHSTpKurWoxY",
  authDomain: "blog-ad432.firebaseapp.com",
  projectId: "blog-ad432",
  storageBucket: "blog-ad432.appspot.com",
  messagingSenderId: "1015716521876",
  appId: "1:1015716521876:web:872a71f8ddffcbc60d1181"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };