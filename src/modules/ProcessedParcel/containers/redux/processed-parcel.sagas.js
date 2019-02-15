import { select, call, takeLatest, put } from 'redux-saga/effects';
import { processedParcelService } from '../../../../shared/services/ProcessedParcel/processed-parcel.service';
import {
  processedParcelFetchRequestActionType,
  onProcessedParcelErrorAction,
  processedParcelFetchResponseAction,
  processedParcelSaveActionType,
} from './processed-parcel.actions';
import { getLoginFromState } from '../../../Login/containers/redux/login.selectors';
import { getProcessedParcelFromState } from './processed-parcel.selectors';

export function* fetchProcessedParcelApiSaga(token) {
  try {
    // call processedParcel Api endpoint
    return yield call([processedParcelService, 'fetchProcessedParcel'], token);
  } catch (e) {
    // error
    // log error
    yield put(
      onProcessedParcelErrorAction({
        message:
          'An error occurred while fetching processedParcels. please make sure api is running.',
      }),
    );
    return [];
  }
}

export function* processedParcelFetchRequestSaga() {
  // get token from state
  const { token } = yield select(getLoginFromState);

  const results = yield call(fetchProcessedParcelApiSaga, token);

  // save results
  yield put(processedParcelFetchResponseAction(results));
}

function* saveProcessedParcelApiSaga(token, payload) {
  try {
    // call processedParcel Api endpoint
    return yield call(
      [processedParcelService, 'saveProcessedParcel'],
      token,
      payload,
    );
  } catch (e) {
    // error
    // log error
    yield put(
      onProcessedParcelErrorAction({
        message:
          'An error occurred while saving processedParcel. please make sure api is running.',
      }),
    );
    return null;
  }
}

export function* processedParcelSaveSaga() {
  // get token from state
  const { token } = yield select(getLoginFromState);

  // get payload
  const { processedParcel } = yield select(getProcessedParcelFromState);

  const result = yield call(saveProcessedParcelApiSaga, token, processedParcel);

  if (result) {
    // update state
    yield call(processedParcelFetchRequestSaga);

    // back
    window.history.back();
  }
}

export function* processedParcelSagas() {
  yield takeLatest(
    processedParcelFetchRequestActionType,
    processedParcelFetchRequestSaga,
  );
  yield takeLatest(processedParcelSaveActionType, processedParcelSaveSaga);
}
