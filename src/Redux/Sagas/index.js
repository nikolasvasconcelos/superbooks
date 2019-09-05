import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_BOOKS,
  BOOKS_FETCH_FAILED,
  GET_BOOK_BY_ID,
} from '../Actions/ActionTypes';

function* fetchBooks(action) {
  try {
    const books = yield call(request, action.search);
    yield put({
      type: REQUEST_BOOKS,
      books: books.data.items,
      total: books.data.totalItems,
    });
  } catch (e) {
    yield put({type: BOOKS_FETCH_FAILED, message: e.message});
  }
}

function request(query = 'the') {
  return axios.get(
    `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${query}`,
  );
}

function* fetchBookInfo(action) {
  try {
    const book = yield call(requestById, action.id);
    yield put({
      type: GET_BOOK_BY_ID,
      detailedBook: book.data,
    });
  } catch (e) {
    yield put({type: BOOKS_FETCH_FAILED, message: e.message});
  }
}

function requestById(id) {
  return axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyB_Az8NyRg-6YDd9zULi3Z3XKmRGVdi3F4`,
  );
}

function* sagaListener() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchBooks);
  yield takeEvery('BOOK_DETAIL_REQUESTED', fetchBookInfo);
}

export default sagaListener;
