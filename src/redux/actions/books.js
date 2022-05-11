/* eslint-disable */
// API imports
// import API from 'books-categories-api';

// constants
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const TOGGLE_BOOK = 'TOGGLE_BOOK';

// const showConnectionError = () => {
//   alert('Connection error occurred. Please try again.');
// };

// action creators
function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

function toggleBook(id) {
  return {
    type: TOGGLE_BOOK,
    id,
  };
}

// Thunk action creators
export function handleAddBook(book) {
  return (dispatch) => {
    // return API.saveBook(book)
      // .then(book => {
        dispatch(addBook(book));
      // })
      // .catch(() => {
        // showConnectionError();
      // });
  };
}

export function handleDeleteBook(book) {
  return (dispatch) => {
    dispatch(removeBook(book.id));

    // return API.deleteBook(book.id).catch(() => {
      // showConnectionError();
      // dispatch(addBook(book));
    // });
  };
}

export function handleToggleBook(id) {
  return (dispatch) => {
    dispatch(toggleBook(id));

    // return API.saveBookToggle(id).catch(() => {
    //   showConnectionError();
    //   dispatch(toggleBook(id));
    // });
  };
}

/* eslint-enable */
