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
  const { coverData, currentSlide, currentSearchIndex } =
    coverResults;
  const { title, author, isbns } = props;

  /*** TODO - make functions to pass down to Carousel component to increment - decrement image slide */

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

  /*** END TODO */

  useEffect(() => {
    const abortController = new AbortController();
    void (async function fetchData() {
      try {
        /*** TODO - iterate over all isbns and search for first 3 images that return and send to carousel make functions above for advancement and decrement of image slide */
        let count = 0;
        for (let i = 0; i < 5 && i < isbns.length; i++) {
          setIsLoading(true);
          const query = isbns[i]; /* isbn to search */
          const url = `https://covers.openlibrary.org/b/isbn/${query}-M.jpg?default=false`;
          const response = await fetch(url, {
            signal: abortController.signal,
          });

          if (response.status === 200) {
            if (count > 0) {
              let newCoverData = coverData;
              newCoverData.push({ url: response.url, text: title });
              count++;
              console.log('Append to array');
              setCoverResults((prevValues) => ({
                ...prevValues,
                coverData: newCoverData,
                currentSearchIndex: coverResults.currentSearchIndex + 1,
              }));
            } else {
              /* If no prior images then replace placeholder image with new data array */
              console.log('New array');
              count++;
              setCoverResults((prevValues) => ({
                ...prevValues,
                coverData: [{ url: response.url, text: title }],
                currentSearchIndex: coverResults.currentSearchIndex + 1,
              }));
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
      abortController.abort(); // cancel pending fetch, axios request on component unmount
    };
  }, [isbns]);

  // useEffect(() => {
  //   setCoverResults([])
  // }, [coverData])

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
      </div>
    </div>
  );
}

export default SearchResultCard;
