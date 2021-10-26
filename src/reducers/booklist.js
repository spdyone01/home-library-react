// Booklist Reducer

const booklistReducerDefaultState = [{}];

// ADD_BOOK
// REMOVE_BOOK
// FAVORITE_BOOK - should I make a seperate array and update that?
// UNFAVORITE_BOOK
// ADD_BOOK_TO_COLLECTION - should I make a seperate array and update that?
// REMOVE_BOOK_FROM_COLLECTION

export default (state = booklistReducerDefaultState, action) => {
    switch(action.type){

        default:
            return state
    }
}