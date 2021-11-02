import React from 'react';
import { connect } from 'react-redux';

// Import Actions
import { setTextFilter } from "../actions/filters";

const SearchBar = (props) => {
    return (
        <div className='search-container'>
            <div className='search-bar'>
                <form className='search-form'>
                    <input
                        id='search-query'
                        type='text'
                        placeholder={props.placeholder}
                        value={props.filters.text}
                        onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <input type='image' id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></input>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(SearchBar);