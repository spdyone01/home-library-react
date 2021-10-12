import React from 'react';
import ReactDOM from 'react-dom';

// Libraries for testing purposes
import faker from 'faker';

// Components for app
import PublicHomePage from './Components/PublicHomePage';
import HomePage from './Components/HomePage';
import BookCard from './Components/BookCard';
import User from './Components/User';
import SidePanel from './Components/SidePanel';
import Content from './Components/Content';
import { Redirect } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

// Stylesheets
import './styles/Header.css';
import './styles/Footer.css';
import './styles/AppWrapper.css';
import './styles/Index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: `${faker.internet.userName()}`,
                email: 'test@gmail.com',
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
        };
    };
    
    render() {
        return (
            <div className='container'>
            <BrowserRouter>
                <Link exact to='/' component={PublicHomePage} />
                <Link to='/homepage' component={HomePage} />
                <footer className='footer'>Created by Trevor Widdison - WiddiWebs</footer>
            </BrowserRouter>
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

