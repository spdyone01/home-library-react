import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ModalForm(props) {
  const {
    title,
    isbns,
    authors,
    publisher,
    description,
    notes,
    subjects,
    collections,
    firstPublishDate,
    favorite,
    selection,
  } = props.formData;

  const setFormData = props.functions[0];
  const changeHandler = props.functions[1];
  const navigate = useNavigate();

  {
    /** TODO - check if it exists in library first and add to users wishlist on firebase */
  }
  const addToWishlist = async () => {
    // Code to add to wishlist in firebase for user.
    // try {
    //     code to add to firebase for user
    // } catch (error) {
    //     toast.error(error)
    // }
    // If successful then toast and nav to wishlist
    if (true) {
      toast.success(`Add ${title} to wishlist`);
      navigate('/wishlist');
    }
  };

  {
    /** TODO - check if it exists, open modal or form for user to fill out data and add to users library on firebase */
  }
  const addToLibrary = async () => {
    // Code to add to wishlist in firebase for user.
    // try {
    //     code to add to firebase for user
    // } catch (error) {
    //     toast.error(error)
    // }
    // If successful then toast and nav to wishlist

    // const setBook = async () => {
    //   try {
    //     const userRef = doc(db, 'users', uid, 'library');
    //   } catch (error) {
    //     toast.error(error.code);
    //     setLoading(false);
    //   }
    // };

    if (true) {
      toast.success(`Add ${title} to library`);
      navigate('/library');
    }
  };

  return (
    <div className='modalForm'>
      <div id={'bookData'} className='flex-row'>
        <label className='input text-slate-800 bg-slate-400 block float-left w-16 rounded-r-none'>
          Title:{' '}
        </label>
        <input
          className='input text-slate-700 bg-transparent rounded-l-none'
          type={'text'}
          placeholder={'Title'}
          value={title}
          onChange={(e) => changeHandler('title', e.target.value)}
          required
        />
        <br></br>

        <label className='input text-slate-800 bg-slate-400 block float-left w-16 rounded-r-none'>
          Author:{' '}
        </label>
        <input
          className='input text-slate-700 bg-transparent rounded-l-none'
          type={'text'}
          placeholder={'Author'}
          value={authors[0]}
          onChange={(e) =>
            setFormData((prevValues) => {
              let oldArr = prevValues.authors;
              oldArr[0] = e.target.value;

              return {
                ...prevValues,
                authors: oldArr,
              };
            })
          }
          required
        />
        <br></br>

        <label className='input text-slate-800 bg-slate-400 block float-left w-16 rounded-r-none'>
          ISBN:{' '}
        </label>
        <input
          className='input text-slate-700 bg-transparent rounded-l-none'
          type={'text'}
          placeholder={'ISBN'}
          value={isbns[0]}
          onChange={(e) =>
            setFormData((prevValues) => {
              let oldArr = prevValues.isbns;
              oldArr[0] = e.target.value;

              return {
                ...prevValues,
                isbns: oldArr,
              };
            })
          }
          required
        />
        <br></br>
      </div>
      <div className='formButtons flex-col items-center text-center'>
        <label
          className='btn btn-sm bg-slate-200 text-slate-700 w-full mt-2'
          onClick={() => {
            switch (selection) {
              case 'wishlist': {
                addToWishlist(title);
                return;
              }
              case 'library': {
                addToLibrary(title);
                return;
              }
              default: {
                toast.error('An error occured');
              }
            }
          }}
        >
          Add to {selection}
        </label>
        <label
          htmlFor='book-form-modal'
          className='btn btn-sm bg-slate-200 text-slate-700 w-full mt-2'
          onClick={() => console.log('Cancel')}
        >
          Cancel
        </label>
      </div>
    </div>
  );
}

export default ModalForm;
