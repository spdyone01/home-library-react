import React from 'react';
import BookCard from './BookCard';

class Content extends React.Component {
    render() {
        return (
            <div>
            <BookCard book={this.props.book} />
            </div>
        )
    } 
}

export default Content;