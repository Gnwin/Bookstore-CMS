// todos.js
import { CHECK_STATUS } from '../actions/categories';
import { RECEIVE_DATA } from '../actions/shared';

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
