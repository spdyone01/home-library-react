import React, { useEffect, useState } from 'react';

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState({
    url: '../media/missing-image.svg',
    text: 'Image Placeholder',
  });
  const { nextImage, prevImage } = props;

  // Change image when user clicks arrows
  useEffect(() => {
    // console.log(coverData)
    if (props.coverData.length > 0) {
      setCurrentImage({
        url: props.coverData[props.currentSlide]?.url,
        text: props.coverData[props.currentSlide]?.text,
      });
    }
  }, [props.coverData]);

  return (
    <div className='carousel justify-center h-40 pb-4 relative w-full bg-transparent pt-5'>
      <figure className='bg-transparent overflow-hidden rounded shadow-lg shadow-slate-600/50'>
        <img
          src={currentImage.url}
          className='bg-transparent min-h-16 max-h-[140px]'
          alt={currentImage.text}
        />{' '}
      </figure>
      <div className='absolute bg-transparent flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
        <p onClick={prevImage} className='btn btn-square btn-sm'>
          ❮
        </p>
        <p onClick={nextImage} className='btn btn-square btn-sm'>
          ❯
        </p>
      </div>
    </div>
  );
}

export default Carousel;
