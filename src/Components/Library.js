import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

import BookList from './BookList';
import Collections from '../pages/Collections';
import Spinner from './Spinner';

function Library(props) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [library, setLibrary] = useState({});

  const { currentUser } = getAuth();
  const { uid, email, displayName } = currentUser;

  const isbn = 9780316055086;

  useEffect(() => {
    setLoading(true);
    const getUserData = async () => {
      try {
        const libraryRef = collection(db, 'users', uid, 'libary');
        const librarySnap = await getDocs(libraryRef);

        // console log each book
        const libraryArray = [];
        librarySnap.forEach((doc) => {
          const book = doc.data();
          book.id = doc.id;
          libraryArray.push(book);
        });

        setLibrary(libraryArray);
        setLoading(false);
      } catch (error) {
        toast.error(error.code);
        setLoading(false);
      }
    };

    const setBook = async () => {
      try {

        const userRef = doc(db, 'users', uid, 'library');
      } catch (error) {
        toast.error(error.code);
        setLoading(false);
      }
    };

    getUserData();
    // setBook();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (library.length < 1) {
    return (
      <h3 className='bg-transparent text-center mt-40'>
        Begin your collection by adding a book!
      </h3>
    );
  }

  return (
    <div className='bg-inherit'>
      <Routes>
        <Route path='/' element={<BookList filters={props.query} booklist={library} />}></Route>
        <Route path='collections' element={<Collections filters={props.query} booklist={library} />}></Route>
      </Routes>
    </div>
  );
}

export default Library;
