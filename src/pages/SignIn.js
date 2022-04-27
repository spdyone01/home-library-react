import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { withRouter } from "react-router-dom";

class PublicHomePage extends React.Component {
  handleLoginSubmit = (e) => {
    e.preventDefault();

    // If valid login then either create user or retrieve user info
    // if(user) { this.setState(() => { user }) }
    // else { this.setState((data) => { name, email, books, etc.... })}
    // After setting user data then change path to home
    this.props.history.push('/home');

    // If invalid login then display error message/prompt
  };

  render() {
    return (
      <div className='container mx-auto px-4'>
        <div className='flex place-content-center'>
          <img
            className='pr-2 '
            id='logo'
            src='../media/HomePageLogo.svg'
            alt='Home Page Logo'
            width='200'
          ></img>
        </div>
        <div className='max-w-4xl mx-auto'>
          <form
            id='login'
            onSubmit={this.handleLoginSubmit}
            className='form-control place-items-center'
          >
            <input
              className='input min-w-min w-1/2 max-w-4xl my-1 mt-5'
              id='email'
              type='email'
              placeholder='Username'
            ></input>
            <input
              className='input min-w-min w-1/2 max-w-4xl my-1 mb-3'
              id='pass'
              type='password'
              placeholder='Password'
            ></input>
            <button type='submit' className='btn primary login px-6'>
              Login
            </button>
          </form>
        </div>
        <div className=''>
          <p className='flex w-full place-content-center pt-10'>
            Don't have an account?
          </p>
          <br />
          <Link
            className='flex w-full place-content-center text-slate-500'
            to='registration'
          >
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default PublicHomePage;
