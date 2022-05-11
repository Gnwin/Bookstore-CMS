import { combineReducers } from 'redux';

import books from './books';
import categories from './categories';
import loading from './loading';

export default combineReducers({
  books,
  categories,
  loading,
});
