import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import '../styles/BookCard.css'

class BookCard extends React.Component {
    render() {
        return (
          <div className='book card wrapper'>
              <Card>
                <Image src={this.props.book.bookImgSrc} wrapped ui={false} className='ui fluid image bookCard' />
                <Card.Content>
                  <Card.Header>{this.props.book.title}</Card.Header>
                  <Card.Meta>{this.props.book.author}</Card.Meta>
                  <Card.Description>
                    {this.props.book.synopsis}
                  </Card.Description>
                </Card.Content> 
                <Card.Content extra>
                  <div>
                    <Icon name='book' /> <div>Pages: {this.props.book.pageCount}</div>
                    <div>ISBN: {this.props.book.ISBN}</div>
                  </div>
                </Card.Content>
              </Card>
          </div>  
        )
    }  
}

export default BookCard;