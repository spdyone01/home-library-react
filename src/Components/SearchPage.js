import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSearchResults } from '../api/openlibraryapi';
import SearchResultCard from "./SearchResultCard";
import SearchResults from "./SearchResults";

const SearchPage = (props) => {

  const [searchAttributes, setSearchAttributes] = useState({ searchQuery: '', results: { docs: [], numFound: 0 }, loading: false, currentPage: 1 });
  const changeHandler = (attribute, value) => { setSearchAttributes(prevValues => { return { ...prevValues, [attribute]: value } }) }

  const searchSubmit = async () => {
    changeHandler('loading', true);
    changeHandler('results', { numFound: 0 })
    try {
      // Try to get data from API, store it, clear search bar and when done change loading to false.
      const results = await getSearchResults(searchAttributes.searchQuery, { searchType: `${props.filters.sortBy}` });
      changeHandler('results', results);
      changeHandler('searchQuery', '')
      changeHandler('loading', false);

      // console.log(results);     //Testing only

    } catch (error) {
      changeHandler('loading', false);
      console.log("error", error);
      setSearchAttributes({ searchQuery: '' });
    }
  }
  // handleSearchResults(results);  // create something that will test for results > 0 and initialize default data for addbook form
  // create cards with handled search results - use showcase arrows for images (up to 10?)

  useEffect(() => {
    if (searchAttributes.results.numFound > 0 && searchAttributes.loading === false) {
      // console.log('use effect')
      // handleSearchResults();
    }
  })

  const handleSearchResults = () => {
    // const pageCount = Math.ceil((searchAttributes.results.numFound / 10))
    // changeHandler('currentSearchResults', newResultsRender)
  }

  let message = 'Search for a book above!';

  return (
    <div className='search-page-container'>

      <div className='search-bar'>
        <form className='search-form'
          onSubmit={(e) => {
            e.preventDefault();
            searchSubmit(searchAttributes.searchQuery, setSearchAttributes);
            handleSearchResults();
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
              <SearchResults
                results={searchAttributes.results}
                page={searchAttributes.currentPage}
              />
              <p>There are {searchAttributes.results.numFound} results</p>
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