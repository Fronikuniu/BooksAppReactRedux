const createActionName = function (name) {
  return `app/authors/${name}`;
};

const ADD_AUTHOR = createActionName('ADD_AUTHOR');
const REMOVE_AUTHOR = createActionName('REMOVE_AUTHOR');

// Selectors - Thanks to the function of selector, changing the data structure is much more pleasant because we change only in one place
export const getAllAuthors = (state) => [...new Set(state.authors.map((author) => author.name))]; //Set() is a specially object who can have only unique data

export const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });
export const removeAuthor = (payload) => ({ type: REMOVE_AUTHOR, payload });

export default function authorsSubReducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_AUTHOR:
      return [...statePart, action.payload];
    case REMOVE_AUTHOR:
      return statePart.filter((author) => author.name !== action.payload);
    default:
      return statePart;
  }
}
