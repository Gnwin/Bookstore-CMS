import React from 'react';
import Book from './Book';

const Books = () => (
  <div className="books appwidth" data-testid="books-a">
    <Book />
    <Book />
    <Book />
  </div>
);

export default Books;
