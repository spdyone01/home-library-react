import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import HomePageLogo from '../../public/media/HomePageLogo.svg';
import OAuth from '../components/OAuth';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // passwordConfirm: '',
    btnEnable: false,
  });

  // TODO - Add passwordConfirm later
  const { name, email, password, /*passwordConfirm,*/ btnEnable } = formData;

  let navigate = useNavigate();

  let clearForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  let handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // Save user to database
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      console.log(formDataCopy);

      // navigate('/library');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email in use');
      } else {
        toast.error('There was an error registering');
      }
    }
    clearForm();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className='container m-0 p-0 pt-10 h-full w-full'>
      <div className='flex place-content-center'>
        <img
          className='pr-2 '
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
          <h3 className='text-2xl pt-4 text-slate-600'>Sign-Up Below!</h3>
          <input
            className='input min-w-min w-3/4 max-w-s my-1 mt-5'
            id='name'
            type='text'
            placeholder='Name'
            onChange={onChange}
            value={name}
          />
          <input
            className='input min-w-min w-3/4 max-w-s my-1'
            id='email'
            type='email'
            placeholder='Email'
            onChange={onChange}
            value={email}
          />
          <input
            className='input min-w-min w-3/4 max-w-s my-1'
            id='password'
            type='password'
            placeholder='Password'
            onChange={onChange}
            value={password}
          />
          {/* <input
            className='input min-w-min w-3/4 max-w-s my-1'
            id='passwordConfirm'
            type='password'
            placeholder='Confirm Password'
            onChange={onChange}
            value={passwordConfirm}
          /> */}
          <button type='submit' className='btn primary login px-6 mt-3'>
            Sign-Up
          </button>
        </form>

        <OAuth />
        
      </div>
      <br />
      <p className='flex place-content-center w-fit mx-auto'>
        <Link className='text-slate-500 ' to='/'>
          Back to Home
        </Link>
      </p>
    </div>
  );
}

export default Register;
