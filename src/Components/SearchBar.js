import React from "react";
import { connect } from "react-redux";

// Import Actions
import { setTextFilter } from "../actions/filters";

const SearchBar = (props) => {
  return (
    <div className="px-10 py-2 mx-0 my-2 w-full">
      <div className="w-full">
        <form className="flex max-w-xl mx-auto px-3">
          <input
            id="search-query"
            type="text"
            placeholder={props.placeholder}
            value={props.filters.text}
            onChange={(e) => {
              props.dispatch(setTextFilter(e.target.value));
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(SearchBar);
