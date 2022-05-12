import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleCheckStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const checkstatus = ((e) => {
    e.preventDefault();
    dispatch(handleCheckStatus());
  });

  return (
    <div className="appwidth">
      <button type="button" className="catbutton" onClick={checkstatus}>Check Status</button>
      <div className="status">
        <div className="status-text">
          {state.categories}
        </div>
      </div>
    </div>
  );
};

export default Categories;
