import React from 'react';

const BookCard = (props) => {
        return(
            <div className='card' key={props.isbn}>
                <div className='bookcard-content'>
                    <img
                        className='image'
                        src={props.img}
                        alt={props.title+' image'}
                    />
                    <h3 className='bookcard-title'>{props.title}</h3>
                    <p className='bookcard-author'>{props.author}</p>
                    <p className='bookcard-isbn'>ISBN: {props.isbn}</p>
                </div>
            </div>
        )
}

export default BookCard;