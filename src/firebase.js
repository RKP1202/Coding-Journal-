// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN28rilEiKKI9YInXtSyNETeeKnrIQrwU",
  authDomain: "web-app-7d0b4.firebaseapp.com",
  projectId: "web-app-7d0b4",
  storageBucket: "web-app-7d0b4.appspot.com",
  messagingSenderId: "299224736642",
  appId: "1:299224736642:web:dfdf5879703ce72d7de59b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
