// Booklist Actions

// ADD_BOOK
// REMOVE_BOOK
// FAVORITE_BOOK - should I make a seperate array and update that?
// UNFAVORITE_BOOK
// ADD_BOOK_TO_COLLECTION - should I make a seperate array and update that?
// REMOVE_BOOK_FROM_COLLECTION

// ADD_BOOK
export const addBook = (
    {
        authors = [''],
        covers = [''],
        description = '',
        firstPublishDate = 1800,
        isbns = [''],
        notes = '',
        publishers = [''],
        subjects = [''],
        title = ''
    } = {}
) => ({
    type: 'ADD_BOOK',
    book: {
        authors,
        covers,
        description,
        firstPublishDate,
        isbns,
        notes,
        publishers,
        subjects,
        title
    }
});