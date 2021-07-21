import axios from 'axios';

export const getBooks = async () => {
  return await axios.get(`http://localhost:3000/books`);
};

export const getAuthors = async () => {
  return await axios.get(`http://localhost:3000/authors`);
};

export const getUsers = async () => {
  return await axios.get(`http://localhost:3000/users`);
};
