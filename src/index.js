import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

// Libraries for testing purposes
// import faker from 'faker';

// Components for app
import PublicHomePage from './Components/PublicHomePage';
import Footer from './Components/Footer';
// import HomePage from './Components/HomePage';
// import { Redirect } from 'react-router';
// import { BrowserRouter, NavLink } from 'react-router-dom';

// Stylesheets
import './styles/styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: `Bob`,
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
                    bookImgSrc: `/#}`
                }],
                avatar: `/#}`,
                isLoggedIn: true
            }
        };
    };

    render() {
        return (
            <div className='container'>
                <PublicHomePage />
                <Footer />
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
