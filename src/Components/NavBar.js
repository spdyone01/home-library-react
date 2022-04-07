import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 bg-base-100v">
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
      </div>
    </div>
  );
}

export default NavBar;

{
  /* <div className="navbar bg-base-100">
      <div className="flex-none w-full">
        <ul className="menu menu-horizontal p-0">
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
          <li><a><Link to='/home'>Home</Link></a></li>
        </ul>
      </div>
    </div> */
}
{
  /* <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          
        </ul>
      </nav> */
}
