import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRKmSgthga4hJH5Q289AjlHNQ3kF2ThIY",

  authDomain: "freelancer-project-ff5d2.firebaseapp.com",

  projectId: "freelancer-project-ff5d2",

  storageBucket: "freelancer-project-ff5d2.appspot.com",

  messagingSenderId: "491342124901",

  appId: "1:491342124901:web:eec6bf2d692bfa37cff38c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {db, auth};
