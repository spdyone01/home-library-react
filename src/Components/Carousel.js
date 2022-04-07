import React from "react";
import { v4 as uuidv4 } from "uuid";

function Carousel(props) {

  return (
    <div className="carousel w-50">
      <div id="slide1" className="carousel-item relative w-50">
        <img
          src='/'
          className="w-50"
          alt="Image Placeholder"
        />
        {""}

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
