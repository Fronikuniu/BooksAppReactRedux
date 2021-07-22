import axios from 'axios';

export const getBooks = () => {
  return axios.get(`http://localhost:3365/books`);
};

export const addBookToDB = (book) => {
  return axios({
    method: 'post',
    url: `http://localhost:3365/books`,
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(book),
  });
};

export const removeBookFromDB = (bookId) => {
  return axios({
    method: 'delete',
    url: `http://localhost:3365/books/${bookId}`,
  });
};

export const removeAuthorBookFromDB = (author) => {
  return axios({
    method: 'delete',
    url: `http://localhost:3365/books/${author}`, //????????????
  });
};

export const getAuthors = () => {
  return axios.get(`http://localhost:3365/authors`);
};

export const addAuthorToDB = (author) => {
  return axios({
    method: 'post',
    url: `http://localhost:3365/authors`,
    headers: { 'Content-Type': 'application/json' },
    data: author,
  });
};

export const removeAuthorFromDB = (author) => {
  return axios({
    method: 'delete',
    url: `http://localhost:3365/authors`, //?????????
  });
};

export const getUsers = () => {
  return axios.get(`http://localhost:3365/users`);
};
