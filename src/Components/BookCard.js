import React from 'react';
import { connect } from 'react-redux';

const BookCard = (props) => {
    return (
        <div className='bookcard-container'>
            <h3>Here are the props...</h3>
            <p>{props.booklist}</p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        booklist: state.booklist,
        filters: state.filters
    }
}

export default BookCard;