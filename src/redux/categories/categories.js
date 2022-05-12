import RECEIVE_DATA from '../shared/actions';

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
function checkStatus(id) {
  return {
    type: CHECK_STATUS,
    id,
  };
}

// Thunk action creators
export function handleCheckStatus(id) {
  return (dispatch) => {
    dispatch(checkStatus(id));
  };
}
