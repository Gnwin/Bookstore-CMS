/* eslint-disable */
// API imports
// import API from 'books-categories-api';

// constants
export const CHECK_STATUS = 'CHECK_STATUS';

// const showConnectionError = () => {
//   alert('Connection error occurred. Please try again.');
// };

// action creators
function checkStatus(id) {
  return {
    type: CHECK_STATUS,
    id,
  };
}

// Thunk action creators
export function handleCheckStatus(id) {
  return dispatch => {
    dispatch(checkStatus(id));

    // return API.saveCheckStatus(id).catch(() => {
      // showConnectionError();
      // dispatch(checkStatus(id));
    // });
  };
}

/* eslint-enable */
