import React from 'react';
import { connect } from 'react-redux';

// Import Actions
import { setTextFilter } from "../actions/filters";

const SearchBar = (props) => {
    return (
        <div className='search-container'>
            <div className='search-bar'>
                <input type='text'
                    placeholder={props.placeholder}
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <img id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></img>
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