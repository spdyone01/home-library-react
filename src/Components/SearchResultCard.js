import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { v4 as uuidv4 } from 'uuid';
import { getCoverURL } from '../api/openlibraryapi';

const SearchResultCard = (props) => {
    const [cardImageData, setCardImageData] = useState([{
        image: '../media/missing-image.svg',
        caption: props.title
    }])

    const getImageData = async (isbn) => {
        const image = await getCoverURL(isbn);
        return image;
    }

    // Need to figure out how to get data, update state and send to Carousel with proper data
    useEffect(() => {
        const shortenedISBNs = props.isbns.slice(0, 6);
        const images = shortenedISBNs.map((isbn) => {
            let imageData = { image: '', caption: ''}
            if (isbn !== '00000000') {
                imageData = {
                    image: getImageData(isbn),
                    caption: props.caption
                }
            }
            console.log(imageData)
        })
    }) 

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

return (
    <div>
        <div key={uuidv4()} className='search-result-card'>
            <Carousel
                key={uuidv4()}
                data={cardImageData}
                width="150px"
                height="200px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="contain"
                thumbnails={false}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            />
            <h3 className='bookcard-title'>{props.title}</h3>
            <p className='bookcard-author'>{props.author}</p>
            <p className='bookcard-isbn'>ISBN: {props.isbns[0]}</p>
        </div>
    </div>
)
}

export default SearchResultCard