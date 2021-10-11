import React from 'react';

import '../styles/User.css';

class User extends React.Component {

    render() {
        return (
            <div id='userDataId' className='userData'>
                <img alt='User Avatar' className='user id' src={this.props.user.avatar}></img>
                <div className='user name'>{this.props.user.name}</div>
                {/* Add other important user data here as needed. */}
            </div> 
        )
    }
}

export default User;