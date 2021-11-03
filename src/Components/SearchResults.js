import React from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResults = (props) => {
    let showingResults = [((props.page - 1) * 10), ((props.page * 10) - 1)]
    let paginatedResults = props.results.docs.slice(showingResults[0], showingResults[1] + 1).map((result) => {
        console.log(result)
        if (!result.isbn) {
            result.isbn = ['no isbn']
        }
        if (!result.author_name) {
            result.author_name = ['no author name']
        }
        if (!result.cover_i) {
            result.cover_i = ['../media/missing-image.svg']
        }
        return (
            <div>
                <SearchResultCard
                    key={result.key}
                    img={result.cover_i}
                    title={result.title}
                    isbn={result.isbn[0] || '124124'}
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