import React from "react";

const BookCard = (props) => {
  return (
    <div className="card rounded-t-none card-compact shadow-xl mb-2 max-w-[160px] h-[250px] p-0 xs:max-w-[200px] xs:max-h-[300px]" key={props.isbn}>
      <figure>
        <img
          className="image h-32 xs:h-36 w-auto shadow-md m-0.5 shadow-slate-800"
          src={props.img}
          alt={props.title + " image"}
        />
      </figure>
      <div className="m-1 p-0.5">
        <h3 className="card-title text-sm text-slate-700 mx-auto text-center">{props.title}</h3>
        <p className="text-sm p-0 m-0">Author: {props.author}</p>
        <p className="text-xs p-0 m-0">ISBN: {props.isbn}</p>
      </div>
    </div>
  );
};

export default BookCard;
