import React, { useState } from "react";
import { connect } from "react-redux";
// import { updateSearchQuery, updateResults } from "../actions/search";  // These may be deprecated in favor of state in this component
import { getSearchResults } from '../api/openlibraryapi';

const SearchPage = (props) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setSearchResults] = useState({});

  const searchSubmit = async () => {
    try{
      const results = await getSearchResults(searchQuery, { searchType: `${props.filters.sortBy}`});
      console.log(results);
      // handleSearchResults(results);  // create something that will test for results > 0 and initialize default data for addbook form
      setSearchQuery('');
      // create cards with handled search results - use showcase arrows for images (up to 10?)
    } catch (error) {
      console.log("error", error);
      setSearchQuery('');
    }
  }

  React.useEffect(() => {

  }, []);
  
  let message = 'Search for a book above!';
  let loading = false;

  return (
    <div className='search-page-container'>
    
      <div className='search-bar'>
        <form className='search-form'
          onSubmit={(e) => {
            e.preventDefault();
            searchSubmit(searchQuery, setSearchQuery);
          }}>
          <input
              id='search-query'
              type='text'
              placeholder={'Search for a book'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              
          />
          <input type='image' id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></input>
        </form>
      </div>

      <div className='search-results'>
        {
          (0 !== 0) ?
          <p>Change me later</p>
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

const mapStateToProps = (state) => {
  return {
      filters: state.filters,
      search: state.search
  };
};

export default connect(mapStateToProps)(SearchPage);