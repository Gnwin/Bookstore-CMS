import RECEIVE_DATA from './actions';

// reducer
export function id(state = '', action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.id;
    default:
      return state;
  }
}

export default id;
