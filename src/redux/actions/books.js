// constants
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const TOGGLE_BOOK = 'TOGGLE_BOOK';

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
