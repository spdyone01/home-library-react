import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { v4 as uuidv4 } from 'uuid';

const SearchResultCard = (props) => {
    let images = [{ image: '../media/missing-image.svg', caption: 'Nothing' }]

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
            <div key={uuidv4()} className='bookcard-content'>
                <Carousel
                    key={uuidv4()}
                    data={images}
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
                <p className='bookcard-isbn'>ISBN: {props.isbn}</p>
            </div>
        </div>
    )
}

export default SearchResultCard