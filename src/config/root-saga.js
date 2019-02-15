import { fork } from 'redux-saga/effects';
import { loginSaga } from '../modules/Login/containers/redux/login.sagas';
import { parcelSagas } from '../modules/Parcel/containers/redux/parcel.sagas';
import { tractorSagas } from '../modules/Tractor/containers/redux/tractor.sagas';

export function* rootSagas() {
  yield fork(loginSaga);
  yield fork(parcelSagas);
  yield fork(tractorSagas);
}
