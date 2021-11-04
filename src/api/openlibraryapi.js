import axios from 'axios';

// Cover API for openlibrary.org
const coversBaseAddress = `https://covers.openlibrary.org/b/`  //${key}/${value}-${size}.jpg;

// Search API for openlibrary.org
const openLibraryBaseAddress = `https://openlibrary.org/search.json?` // ${searchType}=${getSearchString(searchString)}`;

// Search Result function
export const getSearchResults = (query, searchAttributes) => {
    // const [searchResults, setSearchResults] = useState();
    if (query === '') {
        return 'Error - Search Field Empty'
    } else {
        const searchURL = openLibraryBaseAddress + `${searchAttributes.searchType}=${query.replaceAll(' ', '+')}`;
        console.log(searchURL);
        return axios.get(searchURL).then((res) => {
            // Add code here to handle 500 error - request failed - internal server error
            return res.data;
        })
    }
}

// Cover search result function
export const getCoverURL = (query) => {
    const key = ['isbn', 'oclc', 'lccn', 'olid', 'id']
    const size = ['S', 'M', 'L']
    const searchURL = coversBaseAddress + `isbn/${query}-M.jpg?default=false;`  // the ?default=false return a 404 if no image available
    return axios.get(searchURL,{ headers: { "content-type": '/image/jpeg'}}).then((res) => {
        if (res.status !== 404 && res.headers['content-type'] === 'image/jpeg') {
            
            return searchURL;
        } else {
            return '../media/missing-image.svg'
        }
    })
    // return searchURL;
}