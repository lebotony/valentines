import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "zonke-tech-landing-pages",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics initialization with browser-safe handling
let analytics;
if (typeof window !== 'undefined' && process.env.REACT_APP_FIREBASE_API_KEY) {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (error) {
        console.warn('Firebase Analytics could not be initialized:', error);
      }
    }
  }).catch((error) => {
    console.warn('Firebase Analytics is not supported:', error);
  });
}

export { analytics };
