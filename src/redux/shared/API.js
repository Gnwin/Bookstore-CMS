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
    .then((response) => response.data);
}

export const deleteBook = (appid, book) => {
  return fetch(`${api}/apps/${appid}/books/${book.id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: book.id }),
  })
    .then((response) => response.data);
}

export function generateId() {
  return Math.random().toString(36).substring(2);
}

/* eslint-enable */
