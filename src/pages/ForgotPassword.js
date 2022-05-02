import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (error) {
      toast.error('Could not send reset email');
    }
  };
  return (
    <div>
      <header>
        <Link className='text-slate-400' to='/'>Back to login page</Link>
      </header>
      <main className='place-items-center items-center content-center place-content-center justify-items-center justify-self-center'>
        <form id='reset-pass' onSubmit={onSubmit} className='form-control place-items-center'>
          <input
            className='input min-w-min w-3/4 max-w-s my-1 mt-16'
            id='email'
            type='text'
            placeholder='Email'
            onChange={onChange}
            value={email}
          />
          <button type='submit' className='btn primary mt-10'>Send Reset Link</button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
