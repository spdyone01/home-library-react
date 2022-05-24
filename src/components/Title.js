import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Title() {
  const [titleText, setTitleText] = useState('Library');

  // Update Title when location changes
  function usePageViews() {
    let location = useLocation();
    
    useEffect(() => {
      switch (location.pathname) {
        case '/register':
          return  setTitleText('Registration');
        case '/forgotpassword':
          return  setTitleText('Password Reset');
        case '/library':
          return  setTitleText('Library');
        case '/collections':
          return setTitleText('Collections');
        case '/addbook':
          return setTitleText('Book Search');
        case '/favorites':
          setTitleText('Favorites');
        case '/wishlist':
          return   setTitleText('Wishlist');
        case '/profile':
          return   setTitleText('Profile');
        default:
          return  setTitleText('Home Library');
      }
    }, [location]);
  }

  usePageViews();

  return (
    <div className='flex row-span-1 place-content-center pt-4 pb-2 w-full justify-center align-text-bottom'>
      <h3 className='text-gray-700 font-semibold text-3xl'>{titleText}</h3>
    </div>
  );
}

export default Title;
