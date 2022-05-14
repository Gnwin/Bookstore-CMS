import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { id } from './shared/appid';
import books from './books/books';
import categories from './categories/categories';
import loading from './shared/loading';
import middleware from './middleware';

const rootReducer = combineReducers({
  id,
  books,
  categories,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
