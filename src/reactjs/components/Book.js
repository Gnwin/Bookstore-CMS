import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@mui/material/CircularProgress';

import { handleDeleteBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeItem = ((e) => {
    e.preventDefault();
    console.log(book);
    dispatch(handleDeleteBook(book));
  });

  return (
    <div className="book">
      <div className="bookinfo">
        <div className="category">{book.category}</div>
        <div className="name-author">
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
        </div>
        <div className="interactions">
          <p className="comments">Comments</p>
          <button className="remove" type="button" onClick={removeItem}>Remove</button>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="extraBookInfo">
        <div className="completion">
          <CircularProgress variant="determinate" value={book.completion} color="info" size={55} />
          <div className="completed">
            <div className="completionvalue">
              {book.completion}
              %
            </div>
            Completed
          </div>
        </div>
        <div className="chapters">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
