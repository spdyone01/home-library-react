import React from 'react';
import { Link } from 'react-router-dom';

class PublicHomePage extends React.Component {

    render() {
        return (
            <div className='public-home-page-container'>
                <div className='logo-container'>
                    <img id='logo' src='../media/HomePageLogo.svg' alt='hi' width='200'></img>
                </div>
                <div className='title'>
                    <h3>My Home Library</h3>
                </div>
                <div className='login-form'>
                    <form id='login'>
                        <input 
                            className='input'
                            id='email'
                            type='email'
                            placeholder='Username'
                        ></input>
                        <input
                            className='input'
                            id='pass'
                            type='password'
                            placeholder='Password'
                        ></input>
                        <div className='login-button'>
                            <button
                                type='submit'
                                className='btn primary login'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='reg-message'>
                    <p>Don't have an account?</p>
                    <br />
                    <Link to='registration'>Register</Link>
                </div>
            </div> 
        )
    }
}

export default PublicHomePage;