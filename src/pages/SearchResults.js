import React, { useEffect, useState } from 'react';
import SearchResultCard from '../components/SearchResultCard2';
import Carousel from '../components/Carousel';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const MISSING_IMAGE = '../media/missing-image.svg';
const DEFAULT_ISBN = '0000000000000';

const SearchResults = (props) => {
  const { currentPage, results } = props;
  const showingResults = [(currentPage - 1) * 10, currentPage * 10];

  const [paginatedResults, setPaginatedResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Used for Modal Data
  const [formData, setFormData] = useState({
    coverData: [{ url: MISSING_IMAGE, text: 'N/A' }],
    currentSlide: 0,
    title: 'N/A',
    authors: ['N/A'],
    selectedAuthor: 0,
    description: '',
    firstPublishData: 1900,
    favorite: false,
    isbns: [DEFAULT_ISBN],
    notes: '',
    publisher: '',
    subjects: ['N/A'],
    collections: [''],
  });
  const changeHandler = (attribute, value) => {
    setFormData((prevValues) => {
      return { ...prevValues, [attribute]: value };
    });
  };

  function clearModalForm() {
    setFormData({
      coverData: [{ url: MISSING_IMAGE, text: 'N/A' }],
      currentSlide: 0,
      title: 'N/A',
      authors: ['N/A'],
      selectedAuthor: 0,
      description: '',
      firstPublishData: 1900,
      favorite: false,
      isbns: [DEFAULT_ISBN],
      notes: '',
      publisher: '',
      subjects: ['N/A'],
      collections: [''],
    });
  }

  const nextImage = async () => {
    const { currentSlide, coverData } = formData;
    if (currentSlide + 1 < coverData.length) {
      changeHandler('currentSlide', currentSlide + 1);
    }
  };

  const prevImage = async () => {
    const { currentSlide, coverData } = formData;
    if (currentSlide + 1 > 1) {
      changeHandler('currentSlide', currentSlide - 1);
    }
  };

  {
    /** TODO - check if it exists in library first and add to users wishlist on firebase */
  }
  const addToWishlist = async (book) => {
    toast.success(`Add ${book.title} to wishlist`);
  };

  {
    /** TODO - check if it exists, open modal or form for user to fill out data and add to users library on firebase */
  }
  const addToLibrary = async (book) => {
    toast.success(`Add ${book.title} to library`);
  };

  function setModalData(result, coverResults) {
    const { title, isbn, author_name, publisher } = result;
    const { coverData, currentSlide } = coverResults;

    console.log(result);
    console.log(coverResults);
    changeHandler('currentSlide', currentSlide);
    changeHandler('coverData', coverData);
    changeHandler('title', title);
    changeHandler('authors', author_name);
    changeHandler('isbns', isbn);
    changeHandler('publisher', publisher);
  }

  useEffect(() => {
    const newPaginatedResults = results
      .slice(showingResults[0], showingResults[1])
      .map((result) => {
        if (!result.author_name) {
          result.author_name = [''];
        }
        if (!result.isbn) {
          result.isbn = [DEFAULT_ISBN];
        }
        if (!result.cover_edition_key) {
          result.cover_edition_key = DEFAULT_ISBN;
        }

        return (
          <div
            className='card border border-slate-500/70 bg-transparent w-full'
            key={uuidv4()}
          >
            <SearchResultCard
              key={uuidv4()}
              title={result.title}
              isbns={result.isbn}
              author={result.author_name[0]}
              result={result}
              setModalData={setModalData}
            />
            <div className='card-buttons mx-auto mb-4'>
              <button
                key={result.key + 'wish'}
                id={result.key + 'wish'}
                className='btn btn-sm bg-slate-200 text-slate-700 mr-1'
                onClick={() => addToWishlist(result)}
              >
                + Wishlist
              </button>
            </div>
          </div>
        );
      });

    setPaginatedResults(newPaginatedResults);
  }, [results, currentPage]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center justify-center px-2 bg-transparent'>
      {/** Modal for adding a book **/}
      <input type='checkbox' id='book-form-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative bg-slate-200'>
          <label
            htmlFor='book-form-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
            onClick={clearModalForm}
          >
            ✕
          </label>

          {/* Form Data */}
          {!isLoading ? (
            <Carousel
              coverData={formData.coverData}
              currentSlide={formData.currentSlide}
              nextImage={nextImage}
              prevImage={prevImage}
            />
          ) : (
            <Spinner />
          )}

          <input
            className='text-slate-700'
            type={'text'}
            placeholder={'Title'}
            value={formData.title}
            onChange={(e) => changeHandler('title', e.target.value)}
          />

          {/* cover: MISSING_IMAGE,
                  title: 'N/A',
                  authors: ['N/A'],
                  selectedAuthor: 0,
                  description: '',
                  firstPublishData: 1900,
                  favorite: false,
                  isbn: '0000000000000',
                  notes: '',
                  publisher: '',
                  subjects: ['N/A'],
                  collections: [''], */}
        </div>
      </div>
      {paginatedResults}
    </div>
  );
};

export default SearchResults;
