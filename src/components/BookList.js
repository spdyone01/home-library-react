import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore';
import BookCard from './BookCard';

const BookList = (props) => {

    const filteredList = props.booklist.filter((book) => {
        if(book.title){
        return book.title.toLowerCase().includes(props.filters.text.toLowerCase())
        }
        // && true
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
        <div className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-4 bg-transparent h-min place-items-center px-2'>
            {booklist}
        </div>
    )
}

export default BookList;
