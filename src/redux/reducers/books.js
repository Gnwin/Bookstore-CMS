/* eslint-disable */
import { ADD_BOOK, REMOVE_BOOK, TOGGLE_BOOK } from '../actions/books';
import { RECEIVE_DATA } from '../actions/shared';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat([action.book]);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case TOGGLE_BOOK:
      return state.map((book) => {
        return book.id !== action.id
          ? book
          : Object.assign({}, book, { complete: !book.complete });
      });
    case RECEIVE_DATA:
      return action.books;
    default:
      return state;
  }
}

/* eslint-enable */
