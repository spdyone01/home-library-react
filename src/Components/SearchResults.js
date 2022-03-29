import React, { useState } from 'react';
import SearchResultCard from './SearchResultCard2';
import { v4 as uuidv4 } from 'uuid';
import { getCoverURL } from '../api/openlibraryapi';



const SearchResults = (props) => {

    const showingResults = [((props.currentPage - 1) * 10), ((props.currentPage * 10))]


    const paginatedResults = props.results.slice(showingResults[0], showingResults[1])
        .map((result) => {
            
            if (!result.authors) { result.authors = [''] };
            if (!result.isbn) { result.isbn = ['0000000000000'] }

            return (
                <div className='result-card-container' key={uuidv4()}>
                    <SearchResultCard
                        key={uuidv4()}
                        title={result.title}
                        isbns={result.isbn}
                        author={result.authors[0]}
                    />
                    <p>Add to</p>
                    <div className='card-buttons'>
                        <button
                            key={result.key + 'wish'}
                            id={result.key + 'wish'}
                        >
                            + Wishlist
                        </button>
                        <button
                            key={result.key + 'lib'}
                            id={result.key + 'lib'}
                        >
                            + Library
                        </button>
                    </div>
                </div>
            )
        })
    return (
        <div className='results-page-container'>
            {paginatedResults}
        </div>
    )
}

export default SearchResults;