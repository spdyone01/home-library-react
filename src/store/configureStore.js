import { createStore, combineReducers } from 'redux';

// Import Reducers
import filtersReducer from '../reducers/filters';
import userReducer from '../reducers/user';
import booklistReducer from '../reducers/booklist';


// Store creation
export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            filters: filtersReducer,
            booklist: booklistReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

export const demoState = {
    user: {},
    filters: {
        query: '',
        sortBy: 'title' , // Title or author : ascending or descending
        genre: [], // List of genres in current library
        view: 'tile', // Tile or List views
        favorites: [], // Books flagged as favorites
        collections: [{  // Books in collection
            collectionTitle: '',
            books: []
        }]  
    },
    booklist: [{
        authors: ['J.K. Rowling'],
        covers: ['https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg'],
        description: 'A young man becomes a wizard',
        firstPublishDate: 1900,
        isbns: ['9780316055086'],
        notes: 'It was a good book',
        publishers: ['Some people'],
        subjects: ['magic', 'wizard', 'witches', 'fantasy'],
        title: 'Harry Potter and the Sorcerers Stone'
    },{
        authors: ['Andrzej Sapkowski'],
        covers: ['https://covers.openlibrary.org/b/isbn/9780316055086-L.jpg'],
        description: 'A witchers beginning',
        firstPublishDate: 1900,
        isbns: ['9780316055386'],
        notes: 'It was a good book',
        publishers: ['Some people'],
        subjects: ['dark', 'magic', 'witches', 'fantasy', 'adventure'],
        title: 'The Last Wish'
    }],
    searchResults: [{
        "key": "/works/OL2577482W",
        "text": [
            "/works/OL2577482W",
            "The Last Wish",
            "The Last Wish Lib/E",
            "Ostatnie Z yczenie",
            "The last wish",
            "Ostatnie \u017byczenie.",
            "Der letzte Wunsch",
            "Last Wish",
            "Introducing the Witcher",
            "OL19970603M",
            "OL25566366M",
            "OL24271596M",
            "OL31896464M",
            "OL27507443M",
            "OL10426195M",
            "OL28731729M",
            "OL29823876M",
            "OL29485067M",
            "Andrzej Sapkowski ; translated by Danusia Stok",
            "Andrzej Sapkowski ; translated by Danusia Stok.",
            "176825951",
            "424633052",
            "9780575077829",
            "0575077832",
            "9780575082441",
            "9780316029186",
            "9781473226401",
            "9781473231061",
            "1478933305",
            "0575082445",
            "0316495964",
            "0316029181",
            "9781478933304",
            "147323106X",
            "9780316055086",
            "1473226406",
            "9780316495967",
            "0316055085",
            "9780575077836",
            "0575077824",
            "lastwish00andr",
            "lastwish00sapk",
            "Helmut Lingen Verlag",
            "Orbit",
            "Gollancz",
            "Blackstone Audio Inc",
            "Orion Publishing Group, Limited",
            "OL368638A",
            "OL7212792A",
            "Andrzej Sapkowski",
            "Andrzej Sapkowski",
            "Fantasy",
            "Fiction",
            "Translations into English",
            "Polish fiction",
            "Fiction, fantasy, general",
            "Fiction, fantasy, short stories",
            "nyt:mass-market-paperback=2015-07-05",
            "New York Times bestseller",
            "Accessible book",
            "Protected DAISY"
        ],
        "type": "work",
        "seed": [
            "/books/OL19970603M",
            "/books/OL25566366M",
            "/books/OL24271596M",
            "/books/OL31896464M",
            "/books/OL27507443M",
            "/books/OL10426195M",
            "/books/OL28731729M",
            "/books/OL29823876M",
            "/books/OL29485067M",
            "/works/OL2577482W",
            "/subjects/fantasy",
            "/subjects/fiction",
            "/subjects/translations_into_english",
            "/subjects/polish_fiction",
            "/subjects/fiction_fantasy_general",
            "/subjects/fiction_fantasy_short_stories",
            "/subjects/nyt:mass-market-paperback=2015-07-05",
            "/subjects/new_york_times_bestseller",
            "/authors/OL368638A",
            "/authors/OL7212792A"
        ],
        "title": "The Last Wish",
        "title_suggest": "The Last Wish",
        "has_fulltext": true,
        "edition_count": 9,
        "edition_key": [
            "OL19970603M",
            "OL25566366M",
            "OL24271596M",
            "OL31896464M",
            "OL27507443M",
            "OL10426195M",
            "OL28731729M",
            "OL29823876M",
            "OL29485067M"
        ],
        "publish_date": [
            "2019",
            "2020",
            "2007",
            "Jan 1, 2017",
            "2012",
            "May 05, 2015",
            "2008"
        ],
        "publish_year": [
            2019,
            2015,
            2017,
            2020,
            2007,
            2012,
            2008
        ],
        "first_publish_year": 2007,
        "publish_place": [
            "New York",
            "London"
        ],
        "oclc": [
            "176825951",
            "424633052"
        ],
        "lcc": [
            "PG-7178.00000000.A65",
            "PG-7178.00000000.A65 O8613 2007"
        ],
        "ddc": [
            "891.8536",
            "891.8538"
        ],
        "isbn": [
            "9780575077829",
            "0575077832",
            "9780575082441",
            "9780316029186",
            "9781473226401",
            "9781473231061",
            "1478933305",
            "0575082445",
            "0316495964",
            "0316029181",
            "9781478933304",
            "147323106X",
            "9780316055086",
            "1473226406",
            "9780316495967",
            "0316055085",
            "9780575077836",
            "0575077824"
        ],
        "last_modified_i": 1628220216,
        "ebook_count_i": 2,
        "ia": [
            "lastwish00andr",
            "lastwish00sapk"
        ],
        "public_scan_b": false,
        "ia_collection_s": "librarygenesis;china;printdisabled;internetarchivebooks",
        "printdisabled_s": "OL25566366M;OL10426195M",
        "cover_edition_key": "OL10426195M",
        "cover_i": 7360819,
        "publisher": [
            "Helmut Lingen Verlag",
            "Orbit",
            "Gollancz",
            "Blackstone Audio Inc",
            "Orion Publishing Group, Limited"
        ],
        "language": [
            "eng",
            "ger"
        ],
        "author_key": [
            "OL368638A",
            "OL7212792A"
        ],
        "author_name": [
            "Andrzej Sapkowski",
            "Andrzej Sapkowski"
        ],
        "subject": [
            "Fantasy",
            "Fiction",
            "Translations into English",
            "Polish fiction",
            "Fiction, fantasy, general",
            "Fiction, fantasy, short stories",
            "nyt:mass-market-paperback=2015-07-05",
            "New York Times bestseller",
            "Accessible book",
            "Protected DAISY"
        ],
        "id_amazon": [
            "1478933305"
        ],
        "id_goodreads": [
            "2287468",
            "1128434",
            "1128435"
        ],
        "id_librarything": [
            "2051770"
        ],
        "id_overdrive": [
            "F87410A1-66E5-49C0-B2A1-E0C180EF4AC3"
        ],
        "id_wikidata": [
            "Q83974427"
        ],
        "ia_box_id": [
            "IA1138316"
        ],
        "publisher_facet": [
            "Blackstone Audio Inc",
            "Gollancz",
            "Helmut Lingen Verlag",
            "Orbit",
            "Orion Publishing Group, Limited"
        ],
        "subject_facet": [
            "Accessible book",
            "Fantasy",
            "Fiction",
            "Fiction, fantasy, general",
            "Fiction, fantasy, short stories",
            "New York Times bestseller",
            "Polish fiction",
            "Protected DAISY",
            "Translations into English",
            "nyt:mass-market-paperback=2015-07-05"
        ],
        "_version_": 1707312642897477632,
        "lcc_sort": "PG-7178.00000000.A65 O8613 2007",
        "author_facet": [
            "OL368638A Andrzej Sapkowski",
            "OL7212792A Andrzej Sapkowski"
        ],
        "subject_key": [
            "accessible_book",
            "fantasy",
            "fiction",
            "fiction_fantasy_general",
            "fiction_fantasy_short_stories",
            "new_york_times_bestseller",
            "nytmass-market-paperback2015-07-05",
            "polish_fiction",
            "protected_daisy",
            "translations_into_english"
        ],
        "ddc_sort": "891.8536"
    }]
}


// const testUser = {
//     // name: faker.name.firstName(),
//     email: 'test@gmail.com', // test user on database
//     pass: 'pass1234',  // test user pass on database
//     books: [ 9780316333528, 9781408894620, 9780152547684 ],
//     isLoggedIn: false
// }