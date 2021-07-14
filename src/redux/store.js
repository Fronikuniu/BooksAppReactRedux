import { createStore, combineReducers } from 'redux';
import { initializeState } from './initialState';
import authorsSubReducer from './subReducers/authorsRedux';
import booksSubReducer from './subReducers/booksRedux';
import usersSubReducer from './subReducers/usersRedux';

const reducers = {
  books: booksSubReducer,
  authors: authorsSubReducer,
  users: usersSubReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initializeState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

//  How combineReducers works
//
// function combineReducers(reducers) {
//   return function (state, action) {
//     let newState = JSON.parse(JSON.stringify(state));                          //Create copy of state and work on copy
//     for (const param of reducers) {
//       newState[param] = reducers[param](newState[param], action);
//     }
//   };
// }
