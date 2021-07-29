import React from 'react';

class SidePanel extends React.Component {

    render() {
        return (
            <div className='side panel'>
                <div><a>My Library</a></div>
                <ul>
                    <li><a>Collections</a></li>
                    <li><a>Reading</a></li>
                    <li><a>Favorites</a></li>
                    <li><a>Wishlist</a></li>
                    <li><a>Read History</a></li>
                </ul>

                <div>
                    <button>{this.props.isLoggedIn ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        )
    }
}

export default SidePanel;