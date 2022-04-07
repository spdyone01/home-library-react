import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 bg-base-100v">
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a>
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

{/* <div className="navbar bg-base-100">
      <div className="flex-none w-full">
        <ul className="menu menu-horizontal p-0">
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
        </ul>
      </div>
    </div> */}
{/* <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav> */}