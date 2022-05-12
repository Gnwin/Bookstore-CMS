import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import AddNewBookForm from './AddNewBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books appwidth" data-testid="books-a">
      <div className="bookss">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <AddNewBookForm />
    </div>
  );
};

export default Books;
