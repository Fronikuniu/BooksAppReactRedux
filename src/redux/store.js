import { createStore } from 'redux';

const reducer = function (state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return { books: [...state.books, action.book] };
    case 'REMOVE_BOOK':
      return { books: state.books.filter((book) => book.id !== action.bookId) };
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
