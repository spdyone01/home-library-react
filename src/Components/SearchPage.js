import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSearchResults, getCoverURL } from "../api/openlibraryapi";
import SearchResults from "./SearchResults";

const SearchPage = (props) => {
  // Setup State and Handler
  const [searchQuery, setSearchQuery] = useState("");
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

  const searchSubmit = async () => {
    changeHandler("loading", true);
    changeHandler("results", { numFound: 0 });
    try {
      // Try to get data from API, store it, clear search bar and when done change loading to false.
      const results = await getSearchResults(searchQuery, {
        searchType: `${props.filters.sortBy}`,
      });
      changeHandler("results", results);
      changeHandler("loading", false);
      setSearchQuery("");
    } catch (error) {
      changeHandler("loading", false);
      console.log("error", error);
      setSearchQuery("");
    }
  };

  let message = "Search for a book above!";

  return (
    <div className="row-span-6 px-10 py-2 mx-0 my-2 w-full">
      <div className="w-full row-span-1">
        <form
          className="flex max-w-xl mx-auto px-3"
          onSubmit={(e) => {
            e.preventDefault();
            searchSubmit(searchQuery, setSearchAttributes);
          }}
        >
          <input
            id="search-query"
            type="text"
            placeholder={"Search for a book"}
            value={searchQuery}
            onChange={(e) => {
              e.preventDefault();
              setSearchQuery(e.target.value);
            }}
            className="input grow bg-white input-bordered pr-0 mr-0 border-slate-500 border-2 rounded-r-none border-r-0"
          />
          <input
            type="image"
            id="search-button"
            src="../media/book-svgrepo-com.svg"
            alt="search button"
            className="w-fill py-2.5 h-12 p-2 ml-0 space-around bg-white rounded-r-lg border-r-2 border-t-2 border-b-2 border-slate-500 hover:bg-slate-400"
          ></input>
        </form>
      </div>

      <div className="h-0.5 bg-black w-11/12 my-2 mx-auto"></div>

      <div className="search-results row-span-5 h-full">
        {searchAttributes.results.numFound > 0 ? (
          <div className="search-results-cards-container">
            <p>There are {searchAttributes.results.numFound} results</p>
            <SearchResults
              results={searchAttributes.results.docs}
              currentPage={searchAttributes.currentPage}
            />
          </div>
        ) : (
          <p className="grid place-content-center h-full">
            {searchAttributes.loading ? "Loading..." : message}
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    search: state.search,
  };
};

export default connect(mapStateToProps)(SearchPage);
