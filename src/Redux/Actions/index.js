import {BOOK_DETAIL_REQUESTED, USER_FETCH_REQUESTED} from './ActionTypes';

export const getBookById = id => {
  return {
    type: BOOK_DETAIL_REQUESTED,
    id,
  };
};

export const requestBooks = search => {
  return {
    type: USER_FETCH_REQUESTED,
    search,
  };
};
