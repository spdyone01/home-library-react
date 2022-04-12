// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_TITLE
export const setSortToTitle = () => ({
    type: 'SORT_BY_TITLE'
})

// SORT_BY_AUTHOR
export const setSortToAuthor = () => ({
    type: 'SORT_BY_AUTHOR'
})

// SET_LIST_VIEW
export const setViewToList = () => ({
    type: 'SET_LIST_VIEW'
})

// SET_TILE_VIEW
export const setViewToTile = () => ({
    type: 'SET_TILE_VIEW'
})