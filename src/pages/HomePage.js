import React from 'react';
import Library from '../components/Library';

function HomePage() {
    return (
        <div className='flex-col p-0 mx-0 overflow-y-auto w-full place-content-center'>
            <p className='text-center'>Homepage Component</p>
            <Library />
        </div>
    );
}

export default HomePage;