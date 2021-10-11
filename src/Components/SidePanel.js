import React from 'react';

// Styles
import '../styles/SidePanel.css';

class SidePanel extends React.Component {

    render() {
        return (
            <div className='side-panel'>
                <div>My Library</div>
                <ul>
                    <li>Collections</li>
                    <li>Reading</li>
                    <li>Favorites</li>
                    <li>Wishlist</li>
                    <li>Read History</li>
                </ul>
 
                <div>
                    <button className='login-button'>{this.props.isLoggedIn ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        )
    }
}

export default SidePanel;