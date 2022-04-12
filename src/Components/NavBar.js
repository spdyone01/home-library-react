import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="btn btn-outline">
            <a>
              <Link className="hover:bg-blue" to="/home">Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/collections">Collections</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/addbook">Add Book</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/wishlist">Wishlist</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/favorites">Favorites</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
