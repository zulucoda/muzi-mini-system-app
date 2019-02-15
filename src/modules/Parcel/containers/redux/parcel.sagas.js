import { select, call, takeLatest, put } from 'redux-saga/effects';
import { parcelService } from '../../../../shared/services/Parcel/parcel.service';
import {
  parcelFetchRequestActionType,
  onParcelErrorAction,
  parcelFetchResponseAction,
} from './parcel.actions';
import { getLoginFormState } from '../../../Login/containers/redux/login.selectors';

export function* fetchParcelApiSaga(token) {
  try {
    // call parcel Api endpoint with user username and password
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

export function* parcelFetchRequest() {
  // get token from state
  const { token } = yield select(getLoginFormState);

  const results = yield call(fetchParcelApiSaga, token);

  // save results
  yield put(parcelFetchResponseAction(results));
}

export function* parcelSagas() {
  yield takeLatest(parcelFetchRequestActionType, parcelFetchRequest);
}
