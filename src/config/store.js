import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducers } from './root-reducer';
import { rootSagas } from './root-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(rootSagas);
