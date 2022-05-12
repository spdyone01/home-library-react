import React, { useEffect, useState } from "react";
import SearchResultCard from "../components/SearchResultCard2";
import { v4 as uuidv4 } from "uuid";

const SearchResults = (props) => {
  const {currentPage, results} = props;
  const showingResults = [(currentPage - 1) * 10, currentPage * 10];

  const [paginatedResults, setPaginatedResults] = useState([])

  {/** TODO - check if it exists and add to users wishlist on firebase */}
  const addToWishlist = async (book) => {
    console.log(`add ${book.title} to wishlist`)
  }
  
  {/** TODO - check if it exists, open modal or form for user to fill out data and add to users library on firebase */}
  const addToLibrary = async (book) => {
    console.log(`add ${book.title} to library`)
  }

  useEffect(() => {
    const newPaginatedResults = results
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
                onClick={() => addToWishlist(result)}
              >
                + Wishlist
              </button>
              <button
                key={result.key + "lib"}
                id={result.key + "lib"}
                className="btn btn-xs bg-slate-200 text-slate-700"
                onClick={() => addToLibrary(result)}
              >
                + Library
              </button>
            </div>
          </div>
        );
      });

      setPaginatedResults(newPaginatedResults)
  }, [results, currentPage])
  // Need to add pages and buttons for results totalling more than 10
  return <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 overflow-scroll h-100 place-items-center px-2'>{paginatedResults}</div>;
};

export default SearchResults;
