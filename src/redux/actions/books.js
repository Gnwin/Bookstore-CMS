// constants
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
function addBook(book) {
  return {
    type: ADD_BOOK,
    book
  };
}

function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id
  };
}