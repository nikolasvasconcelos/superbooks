import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import {Reducers} from '../Reducers';
import sagaListener from '../Sagas';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

export const BooksStore = createStore(
  Reducers,
  initialState,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagaListener);
