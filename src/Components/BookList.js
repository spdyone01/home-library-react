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

    // const testisbn = [
    //     "0575082445",
    //     "9781473231061",
    //     "9781478933304", 
    //     "1473226406",
    //     "9780316495967",
    //     "9780316055086",
    //     "0575077824",
    //     "0316029181",
    //     "9780316029186",
    //     "9781473226401",
    //     "0575077832",
    //     "147323106X",
    //     "9780575082441",
    //     "9780575077829",
    //     "0316495964",
    //     "1478933305",
    //     "0316055085",
    //     "9780575077836"
    //   ]

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
        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4'>
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