import React from 'react';

const AddNewBookForm = () => (
  <form className="form">
    <h1 className="addnewheader">ADD NEW BOOK</h1>
    <div className="forminput">
      <input type="text" className="inputtitle" placeholder="Book title" required />
      <select placeholder="Category" className="select" required>
        <option value="none" defaultValue hidden>Category</option>
        <option value="Action">Action</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="button">ADD BOOK</button>
    </div>
  </form>
);

export default AddNewBookForm;
