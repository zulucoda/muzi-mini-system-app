import { fork, spawn, call } from 'redux-saga/effects';
import { loginSaga } from '../modules/Login/containers/redux/login.sagas';

export function* rootSagas() {
  yield fork(loginSaga);
}
