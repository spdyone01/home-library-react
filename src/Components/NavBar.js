import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full row-span-1 place-content-center h-20 relative navbar self-end text-xs mx-0 px-0">
      <div className="flex-none w-full h-full place-content-center space-between rounded-xl max-w-2xl">
        <ul className="menu menu-horizontal m-0 p-0 max-w-lg justify-between text-slate-800 text-center">
          <li className="hover:bg-slate-500 hover:text-zinc-900 rounded-xl w-1/5">
              <Link className="w-full place-content-center" to="/home">Home</Link>
          </li>
          <li className="hover:bg-slate-500 hover:text-zinc-900 rounded-xl w-1/5">
              <Link className="w-full place-content-center" to="/collections">Collections</Link>
          </li>
          <li className="hover:bg-slate-500 hover:text-zinc-900 focus:bg-slate-500 focus:text-zinc-900 active:bg-slate-500 active:text-zinc-900 rounded-xl w-1/5">
              <Link className="w-full place-content-center" to="/addbook">Add Book</Link>
          </li>
          <li className="hover:bg-slate-500 hover:text-zinc-900 rounded-xl w-1/5">
              <Link className="w-full place-content-center" to="/wishlist">Wishlist</Link>
          </li>
          <li className="hover:bg-slate-500 hover:text-zinc-900 rounded-xl w-1/5">
              <Link className="w-full place-content-center" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
