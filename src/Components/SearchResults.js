import React from 'react';
import SearchResultCard from './SearchResultCard';
import { v4 as uuidv4 } from 'uuid';

const SearchResults = (props) => {
    let showingResults = [((props.page - 1) * 10), ((props.page * 10) - 1)]

    let paginatedResults = props.results.docs.slice(showingResults[0], showingResults[1] + 1).map((result) => {
        console.log(result)
        if (!result.isbn) {
            result.isbn = ['00000000']
        }
        if (!result.author_name) {
            result.author_name = ['no author name']
        }
        if (!result.cover_i) {
            result.cover_i = ['../media/missing-image.svg']
        }

        const title = () => {
            return (result.title.length > 30) ? 
                result.title.substring(0, 30) + '...' :
                result.title; 
        }

        return (
            <div>
                <SearchResultCard
                    key={uuidv4()}
                    title={title()}
                    isbns={result.isbn}
                    author={result.author_name[0]}
                />
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
        )
    })

    

    return (
        <div className='search-results-container'>
            {paginatedResults}
            <p>{props.results.docs[0].isbn[0]}</p>
        </div>
    )
}

export default SearchResults