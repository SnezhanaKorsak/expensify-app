import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import {
  API_AUTH_KEY, API_AUTH_DOMAIN, AUTH_APP_ID, AUTH_STORAGE_BUCKET, AUTH_PROJECT_ID,
  AUTH_MESSAGING_SENDER_ID
} from '@env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: API_AUTH_KEY,
  authDomain: API_AUTH_DOMAIN,
  projectId: AUTH_PROJECT_ID,
  storageBucket: AUTH_STORAGE_BUCKET,
  messagingSenderId: AUTH_MESSAGING_SENDER_ID,
  appId: AUTH_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;