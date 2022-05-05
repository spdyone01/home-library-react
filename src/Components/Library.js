import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import BookList from './BookList';

function Library(props) {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    setUserData(auth.currentUser);
  }, [auth]);

  return (
    <div className=''>
      <p className='text-center'>Libary Component</p>
      <BookList filters={props.query} booklist={['']} />
    </div>
  );
}

export default Library;
