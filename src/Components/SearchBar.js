import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchBarHeight = 'h-10'

  const setTextFilter = (text) => {
    setSearchQuery(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('search submit')
  }

  return (
    <div className='mx-auto sm:w-3/4'>
      <form onSubmit={onSubmit} className={`flex ${props.bgColor}`}>
        <input
          id='search-query'
          type='text'
          placeholder={props.placeholder}
          value={props.query.text}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          className={`input ${searchBarHeight} pr-1 grow input-bordered ${props.bgColor} border-slate-500 border-2 rounded-r-none border-r-0 w-full`}
        />
        <input
          type='image'
          id='search-button'
          src='../media/book-svgrepo-com.svg'
          alt='search button'
          className={`w-fill ${searchBarHeight} py-1.5  px-2 space-around ${props.bgColor} ${props.hoverColor} rounded-r-lg border-r-2 border-t-2 border-b-2 border-slate-500`}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
