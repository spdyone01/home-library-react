import React from "react";

function AddBook(props) {
  let searchResults = [];

  let message = 'Search for a book above!';
  let loading = false;

  return (
    <div className='addbook-container'>
      {
        (searchResults === []) ?
        <p>Search Results</p>
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
  );
}

export default AddBook;