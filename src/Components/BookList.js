import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';

const BookList = (props) => {
    const filteredList = props.booklist.filter((book) => {
        return book.title.toLowerCase().includes(props.filters.text.toLowerCase())
        && true
        // add genre condition
        // add favorites condition if toggled
        // add collections condition if selected
    })

    // sort list depending on selection

    const booklist = filteredList.map((book) => {
        return (
            <BookCard
                key={book.isbns[0]}
                img={book.covers[0]}
                title={book.title}
                author={book.authors[0]}
                isbn={book.isbns[0]}
            />
        )
    })
    return (
        <div className='booklist-container'>
            {booklist}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        booklist: state.booklist,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(BookList);