/* eslint-disable */
import RECEIVE_DATA from './actions';
import { createAppID, getAllBooks } from './API';
import showConnectionError from './error';

// action creators
function receiveData(id, books, categories) {
  return {
    type: RECEIVE_DATA,
    id,
    books,
    categories,
  };
}

// Thunk action creators
export function handleInitialData() {
  return (dispatch) => {
    if (localStorage.getItem('bkstoreid') === null) {
      return createAppID()
      .then(id => {
        dispatch(receiveData(id, [], []));
        localStorage.setItem('bkstoreid', JSON.stringify(id));
      })
      .catch(() => {
        showConnectionError();
      });
    } else {
      const appid = JSON.parse(localStorage.getItem('bkstoreid'));
      return getAllBooks(appid)
      .then(books => {
        const bks = Object.entries(books).map((arr) => {
          return {
            id: arr[0],
            title: arr[1][0].title,
            author: arr[1][0].author,
            category: arr[1][0].category,
            completion: 10,
          }
        })
        dispatch(receiveData(appid, bks, []));
      })
      .catch(() => {
        showConnectionError()
      });
    }
  };
}

/* eslint-enable */
