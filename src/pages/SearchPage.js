import React, { useEffect, useState } from 'react';
import { getSearchResults, getCoverURL } from '../api/openlibraryapi';
import SearchResults from './SearchResults';
import NavBar from '../components/NavBar';

const SearchPage = (props) => {
  // Setup State and Handler
  const [searchQuery, setSearchQuery] = useState(''); // Do not use setSearchQuery, use changeHandler
  const [searchAttributes, setSearchAttributes] = useState({
    results: { docs: [], numFound: 0 },
    loading: false,
    currentPage: 1,
    pages: 1,
    prevDisabled: true,
    nextDisabled: true,
  });
  const changeHandler = (attribute, value) => {
    setSearchAttributes((prevValues) => {
      return { ...prevValues, [attribute]: value };
    });
  };

  // Destructure and declare variables
  const { results, loading, currentPage, pages, prevDisabled, nextDisabled } =
    searchAttributes;
  const { numFound, docs } = results;
  const message = 'Search for a book above!';

  // Calculate how many pages needed for results - 10 per page
  useEffect(() => {
    const perPage = 10;

    if (numFound > 0) {
      if (numFound > 100) {
        changeHandler('pages', 10); // api is currently setup to only return first 100 results
      } else {
        const totalPages = Math.ceil(numFound / perPage);
        changeHandler('pages', totalPages);
      }
    }
  }, [numFound]);

  // Update next and prev button disabled status
  useEffect(() => {

    // Previous page button checks
    currentPage > 1 ? changeHandler('prevDisabled', false) : changeHandler('prevDisabled', true)
    
    // Next page button checks
    if (numFound > 10) {
      if (currentPage < pages) {
        changeHandler('nextDisabled', false);
      } else {
        changeHandler('nextDisabled', true);
      }
    } else {
      changeHandler('nextDisabled', true);
    }
  }, [currentPage, results, pages]);

  // Retrieve search results from API
  const searchSubmit = async (e) => {
    e.preventDefault();
    changeHandler('loading', true);
    changeHandler('results', { docs: [], numFound: 0 });
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
      // console.log('error', error);
      setSearchQuery('');
    }
  };

  const pageUp = () => {
    if (currentPage < pages) {
      changeHandler('currentPage', currentPage + 1);
    }
  };
  const pageDown = () => {
    if (currentPage > 1) {
      changeHandler('currentPage', currentPage - 1);
    }
  };

  return (
    <div className='bg-transparent bg-slate-100 rounded-2xl'>
      <NavBar
        query={searchQuery}
        onChange={(e) => setSearchQuery(e)}
        onSubmit={searchSubmit}
      />

      <div className='search-results bg-transparent row-span-6 place-items-center px-2 py-0 min-h-16 max-h-96 overflow-y-scroll'>
        {numFound > 0 ? (
          <div className='search-results-cards-container bg-transparent'>
            <p className='text-slate-700  bg-transparent'>
              There are {searchAttributes.results.numFound} results
            </p>
            <SearchResults results={docs} currentPage={currentPage} />
            {/* <input type='button' className='btn' onClick={changeHandler('currentPage', currentPage - 1)}>
              Prev Page
            </input>
            <input type='button' className='btn' onClick={changeHandler('currentPage', currentPage + 1)}>
              Next Page
            </input> */}
          </div>
        ) : (
          <p className='grid place-content-center h-full bg-transparent'>
            {loading ? 'Loading...' : message}
          </p>
        )}
      </div>
      {numFound > 0 && (
        <div className='page-buttons bg-transparent text-center py-2'>
          <button
            id='prevBtn'
            disabled={prevDisabled}
            className='btn mr-2'
            onClick={pageDown}
          >
            Prev Page
          </button>
          <button
            id='nextBtn'
            disabled={nextDisabled}
            className='btn ml-2'
            onClick={pageUp}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
