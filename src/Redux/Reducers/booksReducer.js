import {REQUEST_BOOKS, GET_BOOK_BY_ID} from '../Actions/ActionTypes';

const initialState = {
  books: [],
  totalOfBooks: [],
  detailedBook: {},
  isLoading: false,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_BY_ID:
      return {
        ...state,
        detailedBook: action.detailedBook,
      };
    case REQUEST_BOOKS:
      return {
        ...state,
        books: action.books,
        totalOfBooks: action.total,
      };
    default:
      return state;
  }
};
