import RECEIVE_DATA from '../shared/actions';

// actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/ADD_BOOK';
const TOGGLE_BOOK = 'bookstore/books/ADD_BOOK';

// reducer
export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat([action.book]);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case TOGGLE_BOOK:
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        }
        return { ...book, complete: !book.complete };
      });
    case RECEIVE_DATA:
      return action.books;
    default:
      return state;
  }
}

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
    dispatch(addBook(book));
  };
}

export function handleDeleteBook(book) {
  return (dispatch) => {
    dispatch(removeBook(book.id));
  };
}

export function handleToggleBook(id) {
  return (dispatch) => {
    dispatch(toggleBook(id));
  };
}
