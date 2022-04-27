// React
import React from 'react';

// React-Router-DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Landing Page and Registration
import SignIn from './pages/SignIn';
import Register from './pages/Register';

// Header, Navbar, Footer
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import Collections from './pages/Collections';
import Favorites from './pages/Favorites';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import WishList from './pages/WishList';

// Utility
// import EditBook from './Modals/EditBook';
// import AddBook from './Modals/AddBook';

// Stylesheets
import 'normalize.css/normalize.css';
import './styles/base/index.css';

function App() {
  
  return (
    <div className='grid grid-flow-row auto-rows-auto h-full w-full'>
      <header>
        <Title />
      </header>

      <main>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />

          {/* Sign In Required */}
          <Route path='/:userId/'>
            <Route path='collections' element={<Collections />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='search-page' element={<Register />} />
            <Route path='register' element={<Register />} />
            <Route path='register' element={<Register />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
