import axios from 'axios';

// Cover API for openlibrary.org
//const coversBaseAddress =  `https://covers.openlibrary.org/b/  ${key}/${value}-${size}.jpg`;

// Search API for openlibrary.org
//const openLibraryBaseAddress = `http://openlibrary.org/search.json?  ${searchType}=${getSearchString(searchString)}`;

// Search Result function
const [searchResults, setSearchResults] = useState();

const getSearchResults = (query, searchAttributes) => {
    const searchURL = openLibraryBaseAddress + `${searchAttributes.searchType}=${query.replace(' ', '+')}`;
    axios.get(searchURL).then((res) => {
        setSearchResults(res.data)
    })

    if (!searchResults) { console.log('error during search') };
}

// Cover search result function
const getCover = (isbn, searchAttributes) => {
    console.log('getCover')
}