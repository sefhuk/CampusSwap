import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APT_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider(app);
const database = getDatabase(app);

export const googleSignIn = async () => {
  return signInWithRedirect(auth, googleAuthProvider);
};

export const getSiginInResult = async () => {
  return getRedirectResult(auth).then((res) => {
    return res.user;
  });
};

export const writeData = (univ) => {
  set(ref(database, 'universities/'), { name: univ });
};
