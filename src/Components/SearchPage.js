import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSearchResults, getCoverURL } from '../api/openlibraryapi';
import SearchResults from "./SearchResults";
import { v4 as uuidv4 } from 'uuid';

// data must be immutable - add searchResultCard props acquisition after results are stored.

const SearchPage = (props) => {
  // Setup State and Handler
  const [searchAttributes, setSearchAttributes] = useState({ searchQuery: '', results: { docs: [], numFound: 0 }, loading: false, currentPage: 1 });
  const changeHandler = (attribute, value) => { setSearchAttributes(prevValues => { return { ...prevValues, [attribute]: value } }) }

  const searchSubmit = async () => {
    changeHandler('loading', true);
    changeHandler('results', { numFound: 0 });
    try {
      // Try to get data from API, store it, clear search bar and when done change loading to false.
      const results = await getSearchResults(searchAttributes.searchQuery, { searchType: `${props.filters.sortBy}` });
      changeHandler('results', results);
      changeHandler('searchQuery', '');
      changeHandler('loading', false);
      
    } catch (error) {
      changeHandler('loading', false);
      console.log("error", error);
      setSearchAttributes({ searchQuery: '' });
    }
  }

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

      <div className='divider-line'></div>

      <div className='search-results'>
        {
          (searchAttributes.results.numFound > 0) ?
            <div className='search-results-cards-container'>
              <p>There are {searchAttributes.results.numFound} results</p>
              <SearchResults
                results={searchAttributes.results.docs}
                currentPage={searchAttributes.currentPage}
              />
            </div>
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