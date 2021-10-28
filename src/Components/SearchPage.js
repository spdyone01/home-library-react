import React from "react";
import { getSearchResults } from '../api/openlibraryapi';
import SearchBar from "./SearchBar";

function AddBook(props) {
  let searchResults = [];
  const searchBarEl = document.getElementById('#search-bar');
  console.log(searchBarEl)

  React.useEffect(() => {
    getSearchResults('harry potter', { searchType: 'title'});
  }, []);


  let message = 'Search for a book above!';
  let loading = false;

  return (
    <div className='search-page-container'>
      <SearchBar placeholder='Search for a book'/>
      <div className='search-results'>
        {
          (searchResults.length !== 0) ?
          {searchResults}
          :
          <p className='message'>
            {
              (loading) ?
                'Loading...' 
              :
                message}
          </p>
        }
      </div>
    </div>
  );
}

export default AddBook;