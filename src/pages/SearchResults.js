import React, { useEffect, useState } from "react";
import SearchResultCard from "../components/SearchResultCard2";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';

const SearchResults = (props) => {
  const {currentPage, results} = props;
  const showingResults = [(currentPage - 1) * 10, currentPage * 10];

  const [paginatedResults, setPaginatedResults] = useState([])

  {/** TODO - check if it exists and add to users wishlist on firebase */}
  const addToWishlist = async (book) => {
    toast.success(`Add ${book.title} to wishlist`)
  }
  
  {/** TODO - check if it exists, open modal or form for user to fill out data and add to users library on firebase */}
  const addToLibrary = async (book) => {
    toast.success(`Add ${book.title} to library`)
  }

  useEffect(() => {
    const newPaginatedResults = results
      .slice(showingResults[0], showingResults[1])
      .map((result) => {
        if (!result.author_name) {
          result.author_name = [""];
        }
        if (!result.isbn) {
          result.isbn = ['0000000000000'];
        }
  
        return (
          <div className="card border border-slate-500/70 bg-transparent w-full" key={uuidv4()}>
            <SearchResultCard
              key={uuidv4()}
              title={result.title}
              isbns={result.isbn}
              author={result.author_name[0]}
            />
            <div className="card-buttons mx-auto mb-4">
              <button
                key={result.key + "wish"}
                id={result.key + "wish"}
                className="btn btn-sm bg-slate-200 text-slate-700 mr-1"
                onClick={() => addToWishlist(result)}
              >
                + Wishlist
              </button>
              <button
                key={result.key + "lib"}
                id={result.key + "lib"}
                className="btn btn-sm bg-slate-200 text-slate-700 ml-1"
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
  return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center justify-center px-2 bg-transparent'>{paginatedResults}</div>;
};

export default SearchResults;
