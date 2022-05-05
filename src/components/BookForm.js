import React from "react"

class BookForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: props.authors ? props.authors : [],
            covers: props.covers ? props.covers : [],
            description: props.description ? props.description : '',
            firstPublishDate: props.firstPublishDate ? props.firstPublishDate : null,
            isbn: props.isbn ? props.isbn : [],
            notes: props.notes ? props.notes : '',
            publishers: props.publishers ? props.publishers : [],
            subjects: props.subjects ? props.subjects : [],
            title: props.title ? props.title : ''
        }
    }

    render(props) {
        return (
            <div>
                <h3>Book Form Component</h3>
            </div>
        )
    }
    
}

export default BookForm;
