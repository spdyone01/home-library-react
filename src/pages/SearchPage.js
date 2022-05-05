import React, { useEffect, useState } from 'react';
import { getSearchResults, getCoverURL } from '../api/openlibraryapi';
import SearchResults from './SearchResults';
import NavBar from '../components/NavBar';

const SearchPage = (props) => {
  // Setup State and Handler
  const [searchQuery, setSearchQuery] = useState('');
  const [searchAttributes, setSearchAttributes] = useState({
    results: { docs: [], numFound: 0 },
    loading: false,
    currentPage: 1,
  });
  const changeHandler = (attribute, value) => {
    setSearchAttributes((prevValues) => {
      return { ...prevValues, [attribute]: value };
    });
  };

  const searchSubmit = async (e) => {
    e.preventDefault();
    changeHandler('loading', true);
    changeHandler('results', { numFound: 0 });
    try {
      // Try to get data from API, store it, clear search bar and when done change loading to false.
      const results = await getSearchResults(searchQuery, {
        searchType: `q`,
      });
      changeHandler('results', results);
      changeHandler('loading', false);
      setSearchQuery('');
    } catch (error) {
      changeHandler('loading', false);
      console.log('error', error);
      setSearchQuery('');
    }
  };

  let message = 'Search for a book above!';

  return (
    <div className='bg-transparent bg-slate-100 rounded-2xl'>
      <NavBar query={searchQuery} onChange={(e) => setSearchQuery(e)} onSubmit={searchSubmit} />

      <div className='search-results bg-transparent row-span-6 place-items-center px-2 py-0'>
        {searchAttributes.results.numFound > 0 ? (
          <div className='search-results-cards-container bg-transparent'>
            <p className='text-slate-700  bg-transparent'>
              There are {searchAttributes.results.numFound} results
            </p>
            <SearchResults
              results={searchAttributes.results.docs}
              currentPage={searchAttributes.currentPage}
            />
          </div>
        ) : (
          <p className='grid place-content-center h-full bg-transparent mt-52 mb-52 '>
            {searchAttributes.loading ? 'Loading...' : message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
