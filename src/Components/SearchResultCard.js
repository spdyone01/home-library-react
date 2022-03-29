import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { v4 as uuidv4 } from 'uuid';
import { getCoverURL } from '../api/openlibraryapi';

const SearchResultCard = (props) => {

    const [covers, setCovers] = useState([{ loading: true, image: '../media/missing-image.svg', caption: '' }])

    // Shortens title to prevent overrun
    const title = (title, desiredLength) => {
        return (title.length > desiredLength) ?
            title.substring(0, desiredLength) + '...' :
            title;
    }


    // let coverData = covers;
    // const newCoverData = (isbns) => {
    //     isbns.map(async (isbn) => {
    //         let newCover;
    //         try {
    //             if (isbn !== '0000000000000') {
    //                 newCover = await getCoverURL(isbn);
    //                 if (newCover) {
    //                     setCovers(prevValues => { return { ...prevValues, image: newCover } })
    //                 }
    //             } else {
    //                 console.log(isbn);
    //             }
    //         }
    //         catch {
    //             console.log('error')
    //         }
    //         console.log(newCover)
    //     })

    // }
    // newCoverData(props.isbns)


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div key={uuidv4()} className='search-result-card'>
            {
                (covers.loading) ?
                    <Carousel
                        key={uuidv4()}
                        data={coverData}
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
                    :
                    <h3 className='carousel-loading'>Loading...</h3>
            }
            <h3 className='bookcard-title'>{title(props.title, 50)}</h3>
            <p className='bookcard-author'>{props.author}</p>
            <p className='bookcard-isbn'>ISBN: {props.isbns[0]}</p>
        </div>
    )
}

export default SearchResultCard