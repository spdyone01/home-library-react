import React from 'react';
import { connect } from 'react-redux';
import LibraryContents from './LibraryContents';

function HomePage() {
    return (
        <div className='container mx-auto'>
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