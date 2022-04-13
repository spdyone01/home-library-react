import React from "react";

const BookCard = (props) => {
  return (
    <div
      className="card card-compact shadow-xl mb-2 pt-2 max-w-[160px] h-[250px] p-0 xs:max-w-[200px] xs:max-h-[300px] hover:bg-slate-300 cursor-pointer"
      key={props.isbn}
    >
      <figure className="bg-transparent">
        <img
          className="image h-32 xs:h-36 w-auto shadow-md m-0.5 shadow-slate-800"
          src={props.img}
          alt={props.title + " image"}
        />
      </figure>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-1 right-1 bg-transparent stroke-slate-600 hover:fill-slate-400"
        // onClick={toggleFav}
        // change this with js if it matches item in library
        fill="none" // {isFavorite ? 'favColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <div className="m-1 p-0.5 bg-transparent">
        <h3 className="card-title text-sm text-slate-700 mx-auto text-center bg-transparent">
          {props.title}
        </h3>
        <p className="text-sm text-slate-600 p-0 m-0 mb-0.5 text-center bg-transparent">
          {props.author}
        </p>
        <p className="text-xs  text-slate-500 p-0 m-0 text-center bg-transparent">
          ISBN: {props.isbn}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
