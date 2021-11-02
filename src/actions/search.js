/*****************************************************************************************
 * 
 * 
 *          May Be Deprecated in favor of using state in SearchPage component instead.
 * 
 * 
 *******************************************************************************************/

// UPDATE_SEARCH_QUERY
export const updateSearchQuery = (searchQuery = '') => ({
    type: 'UPDATE_SEARCH_QUERY',
    searchQuery
})

// UPDATE_RESULTS
export const updateResults = (results = {}) => ({
    type: 'UPDATE_RESULTS',
    results
})

// HANDLE_SEARCH_RESULTS
export const handleSearchResults = (results = {}) => ({
    type: 'HANDLE_SEARCH_RESULTS',
    results
})