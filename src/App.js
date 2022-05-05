// React
import React from 'react';

// React-Router-DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Header, Navbar, Footer
import Title from './components/Title.js';
// import SearchBar from './components/SearchBar.js';
// import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

// Notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import SignIn from './pages/SignIn.js';
import Register from './pages/Register.js';
import HomePage from './pages/HomePage.js';
import Collections from './pages/Collections.js';
import Favorites from './pages/Favorites.js';
import ForgotPassword from './pages/ForgotPassword.js';
import SearchPage from './pages/SearchPage.js';
import PageNotFound from './pages/PageNotFound.js';
import PrivateRoute from './components/PrivateRoute.js';
import Profile from './pages/Profile.js';
import WishList from './pages/WishList.js';

// Utility
// import EditBook from './Modals/EditBook';
// import AddBook from './Modals/AddBook';

// Stylesheets
import 'normalize.css/normalize.css';
import './styles/base/index.css';

function App() {
  return (
    <div className='container h-full w-full overflow-scroll'>
      <BrowserRouter>
        <header className='w-full'>
          <Title />
        </header>
        <main className='flex-grow m-0 p-0 pb-10 h-5/6'>
          <Routes>
            {/* Public */}
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/register' element={<Register />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            {/* Private */}
            <Route path='/library' element={<PrivateRoute />}>
              <Route path='/library' element={<HomePage />} />
            </Route>
            <Route path='/collections' element={<PrivateRoute />}>
              <Route path='/collections' element={<Collections />} />
            </Route>
            <Route path='/addbook' element={<PrivateRoute />}>
              <Route path='/addbook' element={<SearchPage />} />
            </Route>
            <Route path='/favorites' element={<PrivateRoute />}>
              <Route path='/favorites' element={<Favorites />} />
            </Route>
            <Route path='/wishlist' element={<PrivateRoute />}>
              <Route path='/wishlist' element={<WishList />} />
            </Route>
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
