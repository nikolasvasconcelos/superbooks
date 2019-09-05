import {booksReducer} from './booksReducer';
import {combineReducers} from 'redux';

export const Reducers = combineReducers({
  booksState: booksReducer,
});
