import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';

const LibraryContents = () => {
    return (
        <div className='librarycontents-container'>
            <div>
                <BookCard />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        booklist: state.booklist,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(LibraryContents);