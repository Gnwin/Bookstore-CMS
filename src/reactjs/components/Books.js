import React from 'react';
import Book from './Book';
import AddNewBookForm from './AddNewBookForm';

const Books = () => (
  <div className="books appwidth" data-testid="books-a">
    <div className="bookss">
      <Book />
      <Book />
      <Book />
    </div>
    <AddNewBookForm />
  </div>
);

export default Books;
