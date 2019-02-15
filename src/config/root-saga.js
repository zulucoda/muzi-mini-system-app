import { fork, spawn, call } from 'redux-saga/effects';
import { loginSaga } from '../modules/Login/containers/redux/login.sagas';
import { parcelSagas } from '../modules/Parcel/containers/redux/parcel.sagas';

export function* rootSagas() {
  yield fork(loginSaga);
  yield fork(parcelSagas);
}
