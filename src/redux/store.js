import { createStore } from 'redux';
import { initializeState } from './initialState';
import authorsSubReducer from './authorsRedux';
import booksSubReducer from './booksRedux';
import usersSubReducer from './usersRedux';

// Selectors - Thanks to the function of selector, changing the data structure is much more pleasant because we change only in one place
export const getAllBooks = (state) => [...state.books];
export const getAllAuthors = (state) => [...new Set(state.authors.map((author) => author.name))]; //Set() is a specially object who can have only unique data
export const getCountBooks = (state) => state.books.length;

// Action creators
export const addBook = (payload) => ({ type: 'ADD_BOOK', payload });
export const removeBook = (payload) => ({ type: 'REMOVE_BOOK', payload });
export const removeAuthorBooks = (payload) => ({ type: 'REMOVE_AUTHOR_BOOKS', payload });

const reducer = function (state, action) {
  let newState = JSON.parse(JSON.stringify(state)); //Create copy of state and work on copy
  newState.books = booksSubReducer(newState.books, action);
  newState.authors = authorsSubReducer(newState.authors, action);
  newState.users = usersSubReducer(newState.users, action);
  return newState;
};

const store = createStore(reducer, initializeState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
