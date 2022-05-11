import React, { useState } from "react";
import SearchResultCard from "../components/SearchResultCard2";
import { v4 as uuidv4 } from "uuid";

const SearchResults = (props) => {
  const showingResults = [(props.currentPage - 1) * 10, props.currentPage * 10];

  // Need to add pages and buttons for results totalling more than 10
  const paginatedResults = props.results
    .slice(showingResults[0], showingResults[1])
    .map((result) => {
      if (!result.author_name) {
        result.author_name = [""];
      }
      if (!result.isbn) {
        result.isbn = ["0000000000000"];
      }

      return (
        <div className="result-card-container" key={uuidv4()}>
          <SearchResultCard
            key={uuidv4()}
            title={result.title}
            isbns={result.isbn}
            author={result.author_name[0]}
          />
          <p>Add to</p>
          <div className="card-buttons">
            <button
              key={result.key + "wish"}
              id={result.key + "wish"}
              className="btn btn-xs bg-slate-200 text-slate-700"
            >
              + Wishlist
            </button>
            <button
              key={result.key + "lib"}
              id={result.key + "lib"}
              className="btn btn-xs bg-slate-200 text-slate-700"
            >
              + Library
            </button>
          </div>
        </div>
      );
    });
  return <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 overflow-scroll h-100 place-items-center px-2'>{paginatedResults}</div>;
};

export default SearchResults;
