import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import SearchBar from './SearchBar';

function NavBar(props) {
  const navBGColor = 'bg-slate-100';
  const hoverColor = 'hover:bg-transparent/20';

  const [userData, setUserData] = useState({
    photoURL: './media/userIcon.svg'
  });

  const auth = getAuth();
  const navigate = useNavigate();

  // Sets userData from auth - if not google then use placeholder image.
  useEffect(() => {
    setUserData(auth.currentUser);
    if (auth.currentUser?.providerData[0].providerId !== 'google.com') {
      setUserData((prevState) => ({
        ...prevState,
        photoURL: './media/userIcon.svg',
      }));
    };
    
  }, [auth]);

  function logout() {
    signOut(auth);
    navigate('/');
  }

  return (
    <div className={`flex navbar bg-transparent rounded-b-2xl gap-2`}>
      <div className={`dropdown bg-transparent grow-0 text-slate-700`}>
        <label tabIndex='0' className={`btn btn-ghost btn-circle bg-transparent ${hoverColor}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-7 bg-transparent`}
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
          className={`menu menu-compact bg-transparent/50 text-slate-200 dropdown-content mt-3 p-2 shadow rounded-box`}
        >
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/library'>
              Home
            </Link>
          </li>
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/collections'>
              Collections
            </Link>
          </li>
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/addbook'>
              Add Book
            </Link>
          </li>
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/favorites'>
              Favorites
            </Link>
          </li>
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/wishlist'>
              Wishlist
            </Link>
          </li>
        </ul>
      </div>

      <div className={`grow bg-transparent`}>
        <SearchBar
          placeholder={'Search your books!'}
          bgColor={navBGColor}
          hoverColor={hoverColor}
          query={props.query}
          onChange={props.onChange}
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit
          }}
        />
      </div>

      <div className={`dropdown dropdown-end bg-transparent pt-1 grow-0 text-slate-700`}>
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
          className='mt-3 p-2  bg-transparent/10 shadow menu menu-compact dropdown-content bg-base-100 rounded-box'
        >
          <li className='bg-transparent'>
            <Link className={`w-full place-content-center bg-transparent ${hoverColor}`} to='/profile'>
              Profile
            </Link>
          </li>
          <li className={`bg-transparent rounded-xl ${hoverColor}`}>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
