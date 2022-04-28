// React
import React from 'react';

// React-Router-DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Header, Navbar, Footer
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Notifications
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Pages
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Collections from './pages/Collections';
import Favorites from './pages/Favorites';
import ForgotPassword from './pages/ForgotPassword';
import SearchPage from './pages/SearchPage';
import WishList from './pages/WishList';
import Library from './components/Library';

// Utility
// import EditBook from './Modals/EditBook';
// import AddBook from './Modals/AddBook';

// Stylesheets
import 'normalize.css/normalize.css';
import './styles/base/index.css';

function App() {
  return (
    <div className='container h-full w-full overflow-scroll'>
      <header className='w-full'>
        <Title />
      </header>
      <main className='flex-grow m-0 p-0 pb-10'>
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/register' element={<Register />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/homepage' element={<HomePage />} />

            {/* Sign In Required */}
            <Route path='/:userId/'>
              <Route path='collections' element={<Collections />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='wishlist' element={<WishList />} />
              <Route path='search-page' element={<Register />} />
              <Route path='register' element={<Register />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
