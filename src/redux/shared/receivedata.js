import { books, categories } from './API';
import RECEIVE_DATA from './actions';

// action creators
function receiveData(books, categories) {
  return {
    type: RECEIVE_DATA,
    books,
    categories,
  };
}

// Thunk action creators
function handleInitialData() {
  return (dispatch) => {
    dispatch(receiveData(books, categories));
  };
}

export default handleInitialData;
