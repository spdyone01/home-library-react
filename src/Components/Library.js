import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import BookList from './BookList';

function Library() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    setUserData(auth.currentUser);
  }, []);

  return (
    <div className=''>
      <p className='text-center'>Libary Component</p>
      {userData ? (
        <h1 className='text-center text-slate-900'>{userData?.displayName}</h1>
      ) : (
        <div className='flex-col place-content-center w-fit mx-auto'>
          <p className='text-center text-slate-900' >User Not Logged In</p>
          <Link className='text-center text-slate-500 mt-10' to='/'>
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Library;
