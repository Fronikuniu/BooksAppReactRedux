import { createStore } from 'redux';

// Selectors - Thanks to the function of selector, changing the data structure is much more pleasant because we change only in one place
export const getAllBooks = (state) => state.books;
export const getAllAuthors = (state) => [...new Set(state.books.map((book) => book.author))]; //Set() is a specially object who can have only unique data
export const getCountBooks = (state) => state.books.length;

// Action creators
export const addBook = (payload) => ({ type: 'ADD_BOOK', payload });
export const removeBook = (payload) => ({ type: 'REMOVE_BOOK', payload });
export const removeAuthorBooks = (payload) => ({ type: 'REMOVE_AUTHOR_BOOKS', payload });

const reducer = function (state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return { books: [...state.books, action.payload] };
    case 'REMOVE_BOOK':
      return { books: state.books.filter((book) => book.id !== action.payload) };
    case 'REMOVE_AUTHOR_BOOKS':
      return { books: state.books.filter((book) => book.author !== action.payload) };
    default:
      return state;
  }
};

const initializeState = {
  books: [
    { id: 1, title: "Harry Potter And The Philosopher'S Stone", author: 'Rowling J. K.', price: 10 },
    { id: 2, title: 'When the Body Says No', author: 'Gabor Mate', price: 20 },
  ],
};

const store = createStore(reducer, initializeState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
