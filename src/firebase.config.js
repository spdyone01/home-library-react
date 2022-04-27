import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4kYUess4jOrrA7z4WRz1fT-wYAYCUdW8',
  authDomain: 'home-library-56153.firebaseapp.com',
  projectId: 'home-library-56153',
  storageBucket: 'home-library-56153.appspot.com',
  messagingSenderId: '253280100070',
  appId: '1:253280100070:web:7e2d0603f45a201d8d2527',
  measurementId: 'G-NW4YWFW2H9',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
