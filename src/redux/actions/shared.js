/* eslint-disable */
// shar{ed.js
import { books } from '../API';

// constants
export const RECEIVE_DATA = 'RECEIVE_DATA';

// action creators
function receiveData(books) {
  return {
    type: RECEIVE_DATA,
    books,
  };
}

// Thunk action creators
export function handleInitialData() {
  return (dispatch) => {
    // return Promise.all([API.fetchBooks()])
      // .then(([books]) => {
        dispatch(receiveData(books));
      // })
      // .catch(err => console.log(err));
  };
}

/* eslint-enable */
