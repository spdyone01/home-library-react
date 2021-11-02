import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSearchResults } from '../api/openlibraryapi';

const SearchPage = (props) => {

  const [searchAttributes, setSearchAttributes] = useState({ searchQuery: '', results: {}, loading: false });
  const changeHandler = (attribute, value) => {setSearchAttributes( prevValues => { return {...prevValues, [attribute]: value }})}

  const searchSubmit = async () => {
    changeHandler('loading', true);
    try{
      const results = await getSearchResults(searchAttributes.searchQuery, { searchType: `${props.filters.sortBy}`});
      // setSearchAttributes({ results: {results} });
      changeHandler('results', results);
      console.log(results);
      // handleSearchResults(results);  // create something that will test for results > 0 and initialize default data for addbook form
      setSearchAttributes({ searchQuery: '' });
      // create cards with handled search results - use showcase arrows for images (up to 10?)
      changeHandler('loading', false);
    } catch (error) {
      changeHandler('loading', false);
      console.log("error", error);
      setSearchAttributes({ searchQuery: '' });
    }
  }

  React.useEffect(() => {
    
  }, []);
  
  let message = 'Search for a book above!';

  return (
    <div className='search-page-container'>
    
      <div className='search-bar'>
        <form className='search-form'
          onSubmit={(e) => {
            e.preventDefault();
            searchSubmit(searchAttributes.searchQuery, setSearchAttributes);
          }}>
          <input
              id='search-query'
              type='text'
              placeholder={'Search for a book'}
              value={searchAttributes.searchQuery}
              onChange={(e) => {
                changeHandler('searchQuery', e.target.value);
              }}
              
          />
          <input type='image' id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></input>
        </form>
      </div>

      <div className='search-results'>
        {
          (searchAttributes.results === undefined) ?
          <p>Change me later</p>
          :
          <p className='message'>
            {
              (searchAttributes.loading) ?
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