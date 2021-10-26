// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'title', // Title or author : ascending or descending
    genre: '',
    view: 'tile', // Tile or List views
    favorites: false, // either show them or don't
    collection: '' // Filter by user collection
}

// SET_TEXT_FILTER
// SORT_BY_TITLE
// SORT_BY_AUTHOR
// SET_LIST_VIEW
// SET_TILE_VIEW
// FAVORITES_FILTER_TOGGLE
// COLLECTION_FILTER_SET
// GENRE_FILTER_SET


export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            }
        case 'SORT_BY_AUTHOR':
            return {
                ...state,
                sortBy: 'title'
            }
        default: 
            return state;
    }
}