import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initializeState } from './initialState';
import thunk from 'redux-thunk'; // Thunk is a addon who modified our dispatch like something like on App.js component
import authorsSubReducer from './subReducers/authorsRedux';
import booksSubReducer from './subReducers/booksRedux';
import usersSubReducer from './subReducers/usersRedux';

const reducers = {
  books: booksSubReducer,
  authors: authorsSubReducer,
  users: usersSubReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)));

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
