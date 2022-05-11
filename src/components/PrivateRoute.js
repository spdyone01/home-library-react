import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <div className='text-center'>
        <progress className='progress w-56'></progress>
      </div>
    );
  }

  return loggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
