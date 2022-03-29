import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { v4 as uuidv4 } from 'uuid';
import { getCoverURL } from '../api/openlibraryapi';

class SearchResultCard extends React.Component {
    constructor(props) {
        super();
        this.state = { coverData: [], loading: true };
    }

    async componentDidMount() {
        /******* Go over array of isbns and return only valid urls for first 10 items in lieu of single call bellow *******/
        let results = await Promise.all(this.props.isbns.slice(0, 9).map(async (isbn) => {
            if (isbn > 0) {
                const url = await getCoverURL(isbn);
                return url ? url : '../media/missing-image.svg';
            }
        }));

        let placeholderDoesNotExist = true;

        function checkCoverData(results) {
            let filteredCovers = [];
            results.forEach((result) => {
                if (result === '../media/missing-image.svg') {
                    if (placeholderDoesNotExist === true) {
                        placeholderDoesNotExist = false;
                        let newCover = { image: result, caption: '' };
                        filteredCovers.push(newCover);
                    }
                }
                if (result !== '../media/missing-image.svg') {
                    if (result !== null || result !== undefined) {
                        let newCover = { image: result, caption: '' };
                        filteredCovers.push(newCover);
                    }
                }
            })
            return filteredCovers;
        }

        let newCoverData = checkCoverData(results);

        newCoverData = newCoverData.slice(0, 9);



        if (newCoverData !== undefined) {
            this.setState({
                coverData: newCoverData
            })
        } else {
            this.setState({
                coverData: [{ image: '../media/missing-image.svg', caption: 'test, 404' }]
            })
        }
        this.setState({
            loading: false
        })
    }

    render() {
        const DESIRED_TITLE_LENGTH = 20;

        // Shortens title if needed to prevent overrun
        const title = (title, desiredLength) => {
            return (title.length > desiredLength) ?
                title.substring(0, desiredLength) + '...' :
                title;
        }

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
                    (!this.state.loading) ?
                        <Carousel
                            key={uuidv4()}
                            data={this.state.coverData}
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
                <h3 className='bookcard-title'>{title(this.props.title, 50)}</h3>
                <p className='bookcard-author'>{this.props.author}</p>
                <p className='bookcard-isbn'>ISBN: {this.props.isbns[0]}</p>
            </div>
        )
    }
}

export default SearchResultCard