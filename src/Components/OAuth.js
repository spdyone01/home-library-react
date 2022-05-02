import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../assets/googleIcon.svg';

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      // If user doesn't exist create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        toast.success('Account Created!');
      }
      navigate('/homepage');
      toast.success('Sign In Successful!');
    } catch (error) {
      console.log(error);
      toast.error('Could not authorize with Google');
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <p className='text-center my-2'>
        Sign {location.pathname === '/register' ? 'up' : 'in'} with{' '}
      </p>
      <button onClick={onGoogleClick}>
        <img
          className='h-12 bg-white p-2 rounded-full'
          src={googleIcon}
          alt='google'
        />
      </button>
    </div>
  );
}

export default OAuth;
