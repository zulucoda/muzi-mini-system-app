import { select, call, takeLatest, put } from 'redux-saga/effects';
import { parcelService } from '../../../../shared/services/Parcel/parcel.service';
import {
  parcelFetchRequestActionType,
  onParcelErrorAction,
  parcelFetchResponseAction,
  parcelSaveActionType,
} from './parcel.actions';
import { getLoginFromState } from '../../../Login/containers/redux/login.selectors';
import { getParcelFromState } from './parcel.selectors';

export function* fetchParcelApiSaga(token) {
  try {
    // call parcel Api endpoint
    return yield call([parcelService, 'fetchParcel'], token);
  } catch (e) {
    // error
    // log error
    yield put(
      onParcelErrorAction({
        message:
          'An error occurred while fetching parcels. please make sure api is running.',
      }),
    );
    return [];
  }
}

export function* parcelFetchRequestSaga() {
  // get token from state
  const { token } = yield select(getLoginFromState);

  const results = yield call(fetchParcelApiSaga, token);

  // save results
  yield put(parcelFetchResponseAction(results));
}

function* saveParcelApiSaga(token, payload) {
  try {
    // call parcel Api endpoint
    return yield call([parcelService, 'saveParcel'], token, payload);
  } catch (e) {
    // error
    // log error
    yield put(
      onParcelErrorAction({
        message:
          'An error occurred while saving parcel. please make sure api is running.',
      }),
    );
    return null;
  }
}

export function* parcelSaveSaga() {
  // get token from state
  const { token } = yield select(getLoginFromState);

  // get payload
  const { parcel } = yield select(getParcelFromState);

  const result = yield call(saveParcelApiSaga, token, parcel);

  if (result) {
    // update state
    yield call(parcelFetchRequestSaga);

    // back
    window.history.back();
  }
}

export function* parcelSagas() {
  yield takeLatest(parcelFetchRequestActionType, parcelFetchRequestSaga);
  yield takeLatest(parcelSaveActionType, parcelSaveSaga);
}
