/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import AddNewBookForm from './AddNewBookForm';

const Books = (props) => {
  const { books } = props;
  return (
    <div className="books appwidth" data-testid="books-a">
      <div className="bookss">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <AddNewBookForm dispatch={props.dispatch}/>
    </div>
  );
};

export default connect((state) => ({
  books: state.books,
}))(Books);

/* eslint-enable */
