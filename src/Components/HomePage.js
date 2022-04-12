import React from 'react';
import { connect } from 'react-redux';
import LibraryContents from './LibraryContents';

function HomePage() {
    return (
        <div className='flex p-0 mx-0 overflow-y-auto w-full place-content-center'>
            <LibraryContents />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(HomePage);