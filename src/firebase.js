import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APT_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider(app);

const auth = getAuth();

export const googleSignIn = async (isMobile) => {
  if (isMobile) {
    await signInWithRedirect(auth, googleAuthProvider);
    return getRedirectResult(auth).then((res) => res.user);
  } else {
    return signInWithPopup(auth, googleAuthProvider).then((res) => res.user);
  }
};