/* eslint-disable */
import axios from "axios";

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const createAppID = () => {
  return axios.post(`${api}/apps`)
    .then((response) => response.data);
}

export const createBook = (appid, obj) => {
  return axios.post(`${api}/apps/${appid}/books`, {
    "item_id": `${obj.id}`,
    "title": `${obj.title}`,
    "author": `${obj.author}`,
    "category": `${obj.category}`,
  })
  .then((response) => response.data);
}

export const getAllBooks = (appid) => {
  return axios.get(`${api}/apps/${appid}/books`)
    .then((response) => {
      return response.data;
    });
}

export const deleteBook = (appid, book) => {
  return axios.post(`${api}/apps/${appid}/books/${book.id}`, {
    "item_id": `${book.id}`
  })
    .then((response) => {
      console.log(response)
      return response.data;
    });
}

export function generateId() {
  return Math.random().toString(36).substring(2);
}

// export const books = [
//   {
//     id: generateId(),
//     title: 'The Strangers',
//     category: 'Action',
//     author: 'Smith Bush',
//     completion: 50,
//   },
//   {
//     id: generateId(),
//     title: 'Unsung Heroes',
//     category: 'Thriller',
//     author: 'Asa Stone',
//     completion: 75,
//   },
//   {
//     id: generateId(),
//     title: 'My Roommate',
//     category: 'Romance',
//     author: 'Jada Harvey',
//     completion: 85,
//   },
// ];

// export const categories = [];

/* eslint-enable */
