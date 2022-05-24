import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Spinner from './Spinner';
import { v4 as uuidv4 } from 'uuid';
import { shortenString } from '../utility/functions';
import { toast } from 'react-toastify';
// import { getCoverURL } from "../api/openlibraryapi";

const MISSING_IMAGE = '../media/missing-image.svg';

function SearchResultCard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [coverResults, setCoverResults] = useState({
    coverData: [],
    currentSlide: 0,
    currentSearchIndex: 0,
  });
  const { coverData, currentSlide, currentSearchIndex } = coverResults;
  const { title, author, isbns, setModalData, result } = props;

  const nextImage = async () => {
    if (currentSlide + 1 < coverData.length) {
      setCoverResults((prevValues) => ({
        ...prevValues,
        currentSlide: currentSlide + 1,
      }));
    }
  };

  const prevImage = async () => {
    if (currentSlide + 1 > 1) {
      setCoverResults((prevValues) => ({
        ...prevValues,
        currentSlide: currentSlide - 1,
      }));
    }
  };

  function checkIfExists(newURL, prevCoverData) {
    const found = prevCoverData.some((cover) => cover.url === newURL);
    if (found) {
      console.log(newURL + ' exists already');
    }
    console.log(found);
    return found;
  }

  useEffect(() => {
    const abortController = new AbortController();
    void (async function fetchData() {
      try {
        /** TODO - iterate over all isbns and search for first 3 images that return and send to carousel make functions above for advancement and decrement of image slide */

        // Get cover for cover_edition_key
        if (result.cover_edition_key != '0000000000000') {
          setIsLoading(true);
          const query =
            result.cover_edition_key; /* cover_edition_key to search */
          const url = `https://covers.openlibrary.org/b/olid/${query}-M.jpg?default=false`;
          const response = await fetch(url, {
            signal: abortController.signal,
          });

          if (response.status === 200) {
            if (coverData.length > 0) {
              // let newCoverData = coverData;
              // newCoverData.push({ url: response.url, text: title });
              setCoverResults((prevValues) => {
                if (checkIfExists(response.url, prevValues.coverData)) {
                  return {
                    ...prevValues,
                    coverData: newCoverData,
                    currentSearchIndex: coverResults.currentSearchIndex + 1,
                  };
                } else {
                  return {
                    ...prevValues,
                    currentSearchIndex: coverResults.currentSearchIndex + 1,
                  };
                }
              });
            } else {
              /* If no prior images then replace placeholder image with new data array */
              setCoverResults((prevValues) => ({
                ...prevValues,
                coverData: [{ url: response.url, text: title }],
                currentSearchIndex: coverResults.currentSearchIndex + 1,
              }));
            }
          }
          setIsLoading(false);
        }

        // Get covers up to a total of 3 covers with isbn searches
        for (let i = 0; i < isbns.length && coverData.length < 3 && i < 5; i++) {
          setIsLoading(true);
          if (isbns[i] != '0000000000000') {
            const query = isbns[i]; /* isbn to search */
            const url = `https://covers.openlibrary.org/b/isbn/${query}-M.jpg?default=false`;
            const response = await fetch(url, {
              signal: abortController.signal,
            });
            if (response.status === 200) {
              // If an image has already been found then append to array
              if (coverData.length > 0) {
                let newCoverData = coverData;
                newCoverData.push({ url: response.url, text: title });
                
                setCoverResults((prevValues) => {
                  if (checkIfExists(response.url, prevValues.coverData)) {
                    return {
                      ...prevValues,
                      coverData: newCoverData,
                      currentSearchIndex: coverResults.currentSearchIndex + 1,
                    };
                  } else {
                    return {
                      ...prevValues,
                      currentSearchIndex: coverResults.currentSearchIndex + 1,
                    };
                  }
                });
              } else {
                /* If no prior images then replace placeholder image with new data array */
                setCoverResults((prevValues) => ({
                  ...prevValues,
                  coverData: [{ url: response.url, text: title }],
                  currentSearchIndex: coverResults.currentSearchIndex + 1,
                }));
              }
            }
          }
          setIsLoading(false);
        }

        /*** END TODO */
      } catch (err) {
        setIsLoading(false);
        //toast.error("error", err);
      }
    })();

    // cancel subscription to useEffect
    return () => {
      abortController.abort();
    };
  }, [isbns]);

  return (
    <div key={uuidv4()} className='bg-transparent'>
      {!isLoading ? (
        <Carousel
          coverData={coverData}
          currentSlide={currentSlide}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      ) : (
        <Spinner />
      )}
      <div className='py-2 px-10 bg-transparent'>
        <h3 className='card-title bg-transparent text-slate-700'>
          {shortenString(title, 50)}
        </h3>
        <p className='bookcard-author bg-transparent text-slate-600'>
          Author: {author}
        </p>
        <p className='bookcard-isbn bg-transparent text-slate-600'>
          ISBN: {isbns[0]}
        </p>

        {/* Opens Modal with form information to confirm book addition */}
        <label
          htmlFor='book-form-modal'
          className='btn btn-sm bg-slate-200 text-slate-700 ml-1'
          onClick={() => setModalData(result, coverResults)}
        >
          + Library
        </label>
      </div>
    </div>
  );
}

export default SearchResultCard;
