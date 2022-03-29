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
        // console.log(searchURL);
        return axios.get(searchURL).then((res) => {
            // Add code here to handle 500 error - request failed - internal server error
            return res.data;
        })
    }
}

// Cover search result function
export const getCoverURL = async (query) => {
    let successfulImage = false;
    // const key = ['isbn', 'oclc', 'lccn', 'olid', 'id']
    // const size = ['S', 'M', 'L']
    // const searchURL = `https://covers.openlibrary.org/b/isbn/${query}-M.jpg?default=false`  // the ?default=false return a 404 if no image available
    const resp = await axios.get(`https://covers.openlibrary.org/b/isbn/${query}-M.jpg?default=false`, { headers: { "content-type": '/image/jpeg' } }).then((res) => {
        if (res.status !== 404 && res.headers['content-type'] === 'image/jpeg') {
            successfulImage = true;
            return res.request.responseURL;
        }
    }).catch((err) => console.log(err))
    if (successfulImage) {
        return resp;
    } else {
        console.log('error - bad image - openlibraryapi.js')
    }
}