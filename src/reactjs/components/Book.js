import React, { useState } from 'react';

const Book = () => {
  const [bookItem] = useState({
    category: 'Action',
    title: 'The Hunger games',
    author: 'Suzanne Collins',
  });

  return (
    <div className="book">
      <div className="bookinfo">
        <div className="">{bookItem.category}</div>
        <div className="">
          <div className="">{bookItem.title}</div>
          <div className="">{bookItem.author}</div>
        </div>
        <div className="interactions">
          <p>Comments</p>
          <p>Review</p>
          <p>Edit</p>
        </div>
      </div>
      <div className="extraBookInfo">
        <div className="">Completed</div>
        <div className="">Current Chapter</div>
      </div>
    </div>
  );
};

export default Book;
