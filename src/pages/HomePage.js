import React from 'react';
import LibraryContents from '../components/LibraryContents';

function HomePage() {
    return (
        <div className='flex p-0 mx-0 overflow-y-auto w-full place-content-center'>
            <LibraryContents />
        </div>
    );
}

export default HomePage;