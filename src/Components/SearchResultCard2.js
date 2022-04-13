import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { v4 as uuidv4 } from "uuid";
import { shortenString } from "../utility/functions";
import { getCoverURL } from "../api/openlibraryapi";

const MISSING_IMAGE = "../media/missing-image.svg";

function SearchResultCard(props) {
  const [coverData, setCoverData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    void (async function fetchData() {
      try {
        // let cover = await getCoverURL(props.isbns[0]);
        setIsLoading(true);
        const query = props.isbns[0];
        const url = `https://covers.openlibrary.org/b/isbn/${query}-M.jpg?default=false`;
        const response = await fetch(url, { signal: abortController.signal });
        setCoverData(response.url);
        setIsLoading(false);
        console.log(response.url);
      } catch (err) {
        setIsLoading(false);
        console.log("error", err);
      }
    })();

    // cancel subscription to useEffect
    return () => {
      abortController.abort(); // cancel pending fetch, axios request on component unmount
    };
  }, []);

  return (
    <div key={uuidv4()} className="card">
      {!isLoading ? (
        <Carousel coverURL={coverData} />
      ) : (
        <h3 className="carousel-loading">Loading...</h3>
      )}
      <h3 className="bookcard-title">{shortenString(props.title, 50)}</h3>
      <p className="bookcard-author">Author: {props.author}</p>
      <p className="bookcard-isbn">ISBN: {props.isbns[0]}</p>
    </div>
  );
}

export default SearchResultCard;
