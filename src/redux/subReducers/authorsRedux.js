import { getAuthors, addAuthorToDB, removeAuthorFromDB } from '../../requests/requests';

const createActionName = function (name) {
  return `app/authors/${name}`;
};

const UPDATE_AUTHORS = createActionName('UPDATE_AUTHORS');
const ADD_AUTHOR = createActionName('ADD_AUTHOR');
const REMOVE_AUTHOR = createActionName('REMOVE_AUTHOR');

// Selectors - Thanks to the function of selector, changing the data structure is much more pleasant because we change only in one place
export const updateAuthors = (payload) => ({ type: UPDATE_AUTHORS, payload });
export const getAllAuthors = (state) => [...new Set(state.authors.map((author) => author.name))]; //Set() is a specially object who can have only unique data
export const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });
export const removeAuthor = (payload) => ({ type: REMOVE_AUTHOR, payload });

//
export const fetchAuthors = () => {
  return (dispatch) => {
    getAuthors()
      .then((response) => {
        const { data } = response;
        dispatch(updateAuthors(data));
      })
      .catch((error) => {});
  };
};

export const addAuthorRequest = (author) => {
  return (dispatch) => {
    addAuthorToDB(author)
      .then(() => {
        dispatch(addAuthor(author));
      })
      .catch((error) => {});
  };
};

export const removeAuthorRequest = (author) => {
  return (dispatch) => {
    removeAuthorFromDB(author)
      .then(() => {
        dispatch(removeAuthor(author));
      })
      .catch((error) => {});
  };
};

export default function authorsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_AUTHORS:
      return action.payload;
    case ADD_AUTHOR:
      return [...statePart, action.payload];
    case REMOVE_AUTHOR:
      return statePart.filter((author) => author.name !== action.payload);
    default:
      return statePart;
  }
}
