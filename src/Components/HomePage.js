import React from 'react';
import { connect } from 'react-redux';
import LibraryContents from './LibraryContents';
import SearchBar from './SearchBar';

function HomePage() {
    return (
        <div className='homepage-container'>
            <LibraryContents />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(HomePage);