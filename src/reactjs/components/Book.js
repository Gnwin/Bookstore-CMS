import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Book = () => {
  const [bookItem] = useState({
    category: 'Action',
    title: 'The Hunger games',
    author: 'Suzanne Collins',
    completion: '75%',
  });

  return (
    <div className="book">
      <div className="bookinfo">
        <div className="category">{bookItem.category}</div>
        <div className="name-author">
          <div className="title">{bookItem.title}</div>
          <div className="author">{bookItem.author}</div>
        </div>
        <div className="interactions">
          <p className="comments">Comments</p>
          <p className="remove">Remove</p>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="extraBookInfo">
        <div className="completion">
          <CircularProgress variant="determinate" value={75} color="info" size={55} />
          <div className="completed">
            <div className="completionvalue">{bookItem.completion}</div>
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
