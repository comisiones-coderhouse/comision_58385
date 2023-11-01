import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "comision-58385.firebaseapp.com",
  projectId: "comision-58385",
  storageBucket: "comision-58385.appspot.com",
  messagingSenderId: "970840677549",
  appId: "1:970840677549:web:684a7bed0c1636bc963a24"
};

export const app = initializeApp(firebaseConfig);