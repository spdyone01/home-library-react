import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Library from '../components/Library';
import NavBar from '../components/NavBar';
import Profile from './Profile';
import PageNotFound from './PageNotFound';

function HomePage() {
    const [query, setQuery] = useState( {text: ''})

    return (
        <div className='home flex-col mx-0 overflow-y-auto w-full h-full'>

            {/** TODO - Figure out a way to keep Navbar and change page below to wishlist, favorites, etc. rather than from App Component */}
            <NavBar />

            <p className='text-center'>Homepage Component</p>
            { /*TODO  Add a way to route to wishlist, favorites, search page from here */}
            {/* <Routes>
                <Route path='/library' element={ <Profile />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes> */}

            {/**  */}
            <Library query={query} />

        </div>
    );
}

export default HomePage;