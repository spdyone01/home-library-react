
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