import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import SearchBar from './SearchBar';

function NavBar() {
  const navBGColor = 'bg-slate-100';
  const hoverColor = 'hover:bg-slate-300';

  const [userData, setUserData] = useState({
    photoURL: './media/userIcon.svg'
  });

  const auth = getAuth();
  const navigate = useNavigate();

  // Sets userData from auth - if not google then use placeholder image.
  useEffect(() => {
    setUserData(auth.currentUser);
    if (auth.currentUser.providerData[0].providerId !== 'google.com') {
      setUserData((prevState) => ({
        ...prevState,
        photoURL: './media/userIcon.svg',
      }));
    };
    
  }, [auth]);

  function logout() {
    // console.log('Logout');
    signOut(auth);
    navigate('/');
  }

  return (
    <div className={`flex navbar ${navBGColor} rounded-2xl gap-2`}>
      <div className={`dropdown grow-0 ${navBGColor}`}>
        <label tabIndex='0' className={`btn btn-ghost btn-circle ${navBGColor} ${hoverColor}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-8 w-8 bg-transparent`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </label>
        <ul
          tabIndex='0'
          className={`menu menu-compact ${navBGColor} dropdown-content mt-3 p-2 shadow rounded-box`}
        >
          <li>
            <Link className={`w-full place-content-center ${hoverColor}`} to='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link className='w-full place-content-center' to='/collections'>
              Collections
            </Link>
          </li>
          <li>
            <Link className='w-full place-content-center' to='/addbook'>
              Add Book
            </Link>
          </li>
          <li>
            <Link className='w-full place-content-center' to='/favorites'>
              Favorites
            </Link>
          </li>
          <li>
            <Link className='w-full place-content-center' to='/wishlist'>
              Wishlist
            </Link>
          </li>
        </ul>
      </div>

      <div className={`grow ${navBGColor}`}>
        <SearchBar
          placeholder={'Search your books!'}
          bgColor={navBGColor}
          hoverColor={hoverColor}
        />
      </div>

      <div className={`dropdown dropdown-end ${navBGColor} pt-1 grow-0`}>
        <label
          tabIndex='0'
          className={`btn btn-ghost btn-circle avatar ${navBGColor} ${hoverColor}`}
        >
          <div className={`w-10 rounded-full border border-black`}>
            <img src={userData.photoURL} alt='User Photo' />
          </div>
        </label>
        <ul
          tabIndex='0'
          className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box'
        >
          <li>
            <Link className='w-full place-content-center' to='/profile'>
              Profile
            </Link>
          </li>
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
