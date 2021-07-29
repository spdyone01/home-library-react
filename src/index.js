import React from 'react';
import ReactDOM from 'react-dom';

// Libraries for testing purposes
import faker from 'faker';

// Components for app
import BookCard from './Components/BookCard';
import User from './Components/User';
import SidePanel from './Components/SidePanel';
import Content from './Components/Content'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
            {user: 
                {
                    name: `${faker.internet.userName()}`, 
                    pass: 'pass1', 
                    books: [{
                        title: 'Where the Red Fern Grows',
                        ISBN: '23f2220asdf0930',
                        author: 'Wilson Rawls',
                        synopsis: 'A tale of a boy and his two hounds',
                        pageCount: 188,
                        bookImgSrc: `${faker.internet.avatar()}`
                    },
                    {
                        title: 'Harry Potter and the Sorcerers Stone',
                        ISBN: 'asdf88a8ef383j',
                        author: 'J.K. Rowling',
                        bookImgSrc: `${faker.internet.avatar()}`
                    }],
                    avatar: `${faker.internet.avatar()}`,
                    isLoggedIn: true
                }
            }
    }
    
    render() {
        return (
            <div class='container'>
                <header>
                    <div class='title'>{this.state.user.name}'s Library</div>
                </header>
                <User user={this.state.user} />
                <SidePanel isLoggedIn={this.state.user.isLoggedIn} />
                <Content />
                <BookCard book={this.state.user.books[0]} />
                <footer>Created by Trevor Widdison - WiddiWebs</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

