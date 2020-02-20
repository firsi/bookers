import { createStore, applyMiddleware, combineReducers } from 'redux';
import  thunk  from 'redux-thunk';
import { booksReducer } from './reducers/booksReducers';
import { saveBookReducer } from './reducers/saveBookReducer';

// const initialState = {};

// const middleware = [thunk];

const reducers = combineReducers({
    books: booksReducer,
    saveBook: saveBookReducer,
});

export const store = createStore( reducers, applyMiddleware(thunk));

export default store;

// export const initStore = (initialState = {}) => {
//     return createStore(reducers, initialState, applyMiddleware(thunk));
//   };