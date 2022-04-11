import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';

const LibraryContents = () => {
    return (
        <div>
            <BookList />
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