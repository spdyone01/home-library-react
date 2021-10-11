import React from 'react';
import ReactDOM from 'react-dom';

// Libraries for testing purposes
import faker from 'faker';

// Components for app
import BookCard from './Components/BookCard';
import User from './Components/User';
import SidePanel from './Components/SidePanel';
import Content from './Components/Content';

// Stylesheets
import './styles/Header.css';
import './styles/Footer.css';
import './styles/AppWrapper.css';
import './styles/Index.css';

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
                        synopsis: 'The story of two dogs and a boy',
                        pageCount: 188,
                        bookImgSrc: './media/Where_the_red_fern_grows.jpg'
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
            <div className='container'>
                <header className='header'>
                    <div class='title'>{this.state.user.name}'s Library</div>
                </header>
                <div className='app-wrapper'>
                    <User user={this.state.user} className='side-panel user-info'/>
                    <SidePanel isLoggedIn={this.state.user.isLoggedIn} className='side-panel'/>
                    <Content book={this.state.user.books[0]} />
                    
                </div>
                <footer className='footer'>Created by Trevor Widdison - WiddiWebs</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

