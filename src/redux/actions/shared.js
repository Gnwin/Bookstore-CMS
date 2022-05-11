import { books, categories } from '../API';

// constants
export const RECEIVE_DATA = 'RECEIVE_DATA';

// action creators
function receiveData(books) {
  return {
    type: RECEIVE_DATA,
    books,
    categories,
  };
}

// Thunk action creators
export function handleInitialData() {
  return (dispatch) => {
    dispatch(receiveData(books, categories));
  };
}
