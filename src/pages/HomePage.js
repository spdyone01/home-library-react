import React, { useState } from 'react';
import Library from '../components/Library';
import NavBar from '../components/NavBar';

function HomePage() {
    const [query, setQuery] = useState( {text: ''});

    const onChange = (q) => { setQuery({ text: q}) }

    return (
        <div className='home bg-slate-100 rounded-xl flex-col mx-0 overflow-y-auto w-full h-full'>

            {/** TODO - Figure out a way to keep Navbar and change page below to wishlist, favorites, etc. rather than from App Component */}
            <NavBar query={query} onChange={onChange} onSubmit={(e) => e.preventDefault()}/>
            <Library query={query} />

        </div>
    );
}

export default HomePage;