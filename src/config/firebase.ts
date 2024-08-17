// firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM5CHz50XE4CBArfka6P3LIyDXAEfVWao",
  authDomain: "tsypos-d0d89.firebaseapp.com",
  projectId: "tsypos-d0d89",
  storageBucket: "tsypos-d0d89.appspot.com",
  messagingSenderId: "566971304265",
  appId: "1:566971304265:web:6275e9a3f1186976c17298",
  measurementId: "G-HZ1L46GZG5"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics | undefined = typeof window !== 'undefined' ? getAnalytics(app) : undefined;

export { app, analytics };
