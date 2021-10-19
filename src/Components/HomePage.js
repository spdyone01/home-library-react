import React from 'react';



function HomePage(props) {
    return (
        <div className='homepage-container'>
            <div className='search-container'>
                <div className='search-bar'>
                    <input type='text' placeholder='Search Library'></input>
                    <img id='search-button' src='../media/book-svgrepo-com.svg' alt='search button' width='20px'></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;