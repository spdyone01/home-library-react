import React from 'react';
import { connect } from 'react-redux';

// Import Actions
import { setTextFilter } from "../actions/filters";


function HomePage(props) {
    return (
        <div className='homepage-container'>
            <div className='search-container'>
                <div className='search-bar'>
                    <input type='text'
                        placeholder='Search Library'
                        value={props.filters.text}
                        onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <img id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></img>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(HomePage);