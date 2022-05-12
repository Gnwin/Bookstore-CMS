import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import books from './books/books';
import categories from './categories/categories';
import loading from './shared/loading';

const rootReducer = combineReducers({
  books,
  categories,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
