import React from 'react';
import Library from '../components/Library';
import NavBar from '../components/NavBar';

function HomePage() {
    return (
        <div className='flex-col p-0 mx-0 overflow-y-auto w-full'>
            <p className='text-center'>Homepage Component</p>
            <Library />
            <NavBar />
        </div>
    );
}

export default HomePage;