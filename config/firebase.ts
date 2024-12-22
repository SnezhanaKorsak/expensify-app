import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDyFRB4EskeYD9zxHI6kwvnQ6BwpTcCNKM',
  authDomain: 'expensify-5b073.firebaseapp.com',
  projectId: 'expensify-5b073',
  storageBucket: 'expensify-5b073.firebasestorage.app',
  messagingSenderId: '719400807119',
  appId: '1:719400807119:web:77d4a54fe57991db73e5ba'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;