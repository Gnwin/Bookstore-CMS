// constants
export const CHECK_STATUS = 'CHECK_STATUS';

// action creators
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
