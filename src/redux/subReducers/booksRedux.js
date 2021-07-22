import { getBooks, addBookToDB, removeBookFromDB, removeAuthorBookFromDB } from '../../requests/requests';

const createActionName = function (name) {
  return `app/books/${name}`;
};

const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');
const ADD_BOOK = createActionName('ADD_BOOK');
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const REMOVE_AUTHOR_BOOKS = createActionName('REMOVE_AUTHOR_BOOKS');

// Selectors - Thanks to the function of selector, changing the data structure is much more pleasant because we change only in one place
export const getAllBooks = (state) => [...state.books];
export const getCountBooks = (state) => state.books.length;

// Action creators
export const updateBooks = (payload) => ({ type: UPDATE_BOOKS, payload });
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
export const removeAuthorBooks = (payload) => ({ type: REMOVE_AUTHOR_BOOKS, payload });

//
export const fetchBooks = () => {
  return (dispatch) => {
    getBooks()
      .then((response) => {
        const { data } = response;
        dispatch(updateBooks(data));
      })
      .catch((error) => {});
  };
};

export const addBookRequest = (book) => {
  return (dispatch) => {
    addBookToDB(book)
      .then(() => {
        dispatch(addBook(book));
      })
      .catch((error) => {});
  };
};

export const removeBookRequest = (bookId) => {
  return (dispatch) => {
    removeBookFromDB(bookId)
      .then(() => {
        dispatch(removeBook(bookId));
      })
      .catch((error) => {});
  };
};

export const removeAuthorBookRequest = (author) => {
  return (dispatch) => {
    removeAuthorBookFromDB(author)
      .then(() => {
        dispatch(removeAuthorBooks(author));
      })
      .catch((error) => {});
  };
};

export default function booksSubReducer(statePart = [], action = {}) {
  //SubReducers wait for default values if not set ^            ^
  switch (action.type) {
    case UPDATE_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...statePart, action.payload];
    case REMOVE_BOOK:
      return statePart.filter((book) => book.id !== action.payload);
    case REMOVE_AUTHOR_BOOKS:
      return statePart.filter((book) => book.author !== action.payload);
    default:
      return statePart;
  }
}
