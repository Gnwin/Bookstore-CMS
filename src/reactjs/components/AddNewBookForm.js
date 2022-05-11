/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { handleAddBook } from '../../redux/actions/books';
import { generateId } from '../../redux/API';

const AddNewBookForm = (props) => {
  const [bookdetails, setBookDetails] = useState({
    name: '',
    category: '',
    author: 'unknown',
    completion: 0,
  });

  const genres = ['Action', 'Science fiction', 'Economy'];

  const updateNameAndCategory = (value) => {
    if (genres.includes(value)) {
      setBookDetails((oldState) => ({
        name: oldState.name,
        category: value,
        author: 'unknown',
        completion: 0,
      }));
    } else {
      setBookDetails((oldState) => ({
        name: value,
        category: oldState.category,
        author: 'unknown',
        completion: 0,
      }));
    }
  };

  const addItem = (e) => {
    e.preventDefault();
    const book = {
      id: generateId(),
      title: bookdetails.name,
      category: bookdetails.category,
      author: bookdetails.author,
      completion: bookdetails.completion,
    };
    props.dispatch(handleAddBook(book));
  };

  return (
    <form className="form" onSubmit={addItem}>
      <h1 className="addnewheader">ADD NEW BOOK</h1>
      <div className="forminput">
        <input
          type="text"
          className="inputtitle"
          placeholder="Add Book title"
          value={bookdetails.name}
          onChange={(e) => updateNameAndCategory(e.target.value)}
          required
        />
        <select
          placeholder="Category"
          className="select"
          value={bookdetails.category}
          onChange={(e) => updateNameAndCategory(e.target.value)}
          required
        >
          <option value="" defaultValue hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="button">ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddNewBookForm;

AddNewBookForm.propTypes = {
  dispatch: PropTypes.instanceOf(Function).isRequired,
};

/* eslint-enable */
