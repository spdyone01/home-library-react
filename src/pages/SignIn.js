import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import HomePageLogo from '../../public/media/HomePageLogo.svg';
import OAuth from '../components/OAuth';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  let navigate = useNavigate();

  let handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate('/library');
      }
    } catch (error) {
      toast.error('Invalid User Credentials');
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className='container m-0 p-0 pt-6 h-full w-full'>
      <div className='flex place-content-center'>
        <img
          className='pr-2'
          id='logo'
          src={HomePageLogo}
          alt='Home Page Logo'
          width='180'
        ></img>
      </div>
      <div className='max-w-4xl mx-auto'>
        <form
          id='login'
          onSubmit={handleLoginSubmit}
          className='form-control place-items-center'
        >
          <input
            className='input min-w-min w-3/4 max-w-s my-1 mt-5'
            id='email'
            type='email'
            placeholder='Email'
            onChange={onChange}
            value={email}
          ></input>
          <input
            className='input min-w-min w-3/4 max-w-s my-1'
            id='password'
            type='password'
            placeholder='Password'
            onChange={onChange}
            value={password}
          ></input>

          <p className='my-3'>
            <Link className='text-slate-400' to='/forgotpassword'>
              Forgot Password
            </Link>
          </p>

          <button type='submit' className='btn primary login px-6 my-2'>
            Login
          </button>
        </form>

        <OAuth />
      </div>
      <div className='flex-col justify-end mt-2'>
        <p className='flex place-content-center pt-2 text-slate-600'>
          Don't have an account?
        </p>
        <p className='flex place-content-center w-fit mx-auto'>
          <Link className='text-slate-500 mt-2' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
