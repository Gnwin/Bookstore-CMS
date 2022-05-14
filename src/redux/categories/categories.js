/* eslint-disable */
import RECEIVE_DATA from '../shared/actions';
import showConnectionError from '../shared/error';

// actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// categories reducer
export default function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    case RECEIVE_DATA:
      return action.categories;
    default:
      return state;
  }
}

// categories action creators
function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

// Thunk action creators
export function handleCheckStatus() {
  return (dispatch) => {
    dispatch(checkStatus());
  };
}

/* eslint-enable */
