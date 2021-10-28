import axios from 'axios';
import { useState } from 'react';

// Cover API for openlibrary.org
//const coversBaseAddress =  `https://covers.openlibrary.org/b/  ${key}/${value}-${size}.jpg`;

// Search API for openlibrary.org
const openLibraryBaseAddress = `https://openlibrary.org/search.json?` // ${searchType}=${getSearchString(searchString)}`;

// Search Result function

export const getSearchResults = (query, searchAttributes) => {
    // const [searchResults, setSearchResults] = useState();
    const searchURL = openLibraryBaseAddress + `${searchAttributes.searchType}=${query.replace(' ', '+')}`;
    console.log(searchURL);
    axios.get(searchURL).then((res) => {
        return res.data
    })
}

// Cover search result function
const getCover = (isbn, searchAttributes) => {
    console.log('getCover')
}