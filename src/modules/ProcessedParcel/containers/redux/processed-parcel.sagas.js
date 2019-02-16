import { select, call, takeLatest, put } from 'redux-saga/effects';
import { processedParcelService } from '../../../../shared/services/ProcessedParcel/processed-parcel.service';
import {
  processedParcelFetchRequestActionType,
  onProcessedParcelErrorAction,
  processedParcelFetchResponseAction,
  processedParcelSaveActionType,
  processedParcelOnChangeAction,
  processedParcelSearchResetActionType,
  processedParcelSearchActionType,
} from './processed-parcel.actions';
import { getLoginFromState } from '../../../Login/containers/redux/login.selectors';
import { getProcessedParcelFromState } from './processed-parcel.selectors';
import { parcelFetchRequestAction } from '../../../Parcel/containers/redux/parcel.actions';
import { tractorFetchRequestAction } from '../../../Tractor/containers/redux/tractor.actions';
import { convertToQueryString } from '../utils/processed-parcel.util';
import moment from 'moment';

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

    // clear field saga
    yield call(clearFieldsSaga, processedParcel);

    // back
    window.history.back();
  }
}

export function* clearFieldsSaga(processedParcel) {
  for (let key in processedParcel) {
    yield put(processedParcelOnChangeAction({ name: key, value: '' }));
  }
}

export function* processedParcelSearchResetSaga() {
  const { processedParcel } = yield select(getProcessedParcelFromState);

  yield call(clearFieldsSaga, processedParcel);

  yield call(processedParcelFetchRequestSaga);

  // fetch data for form usage
  yield put(parcelFetchRequestAction());
  yield put(tractorFetchRequestAction());
}

export function* searchProcessedParcelApiSaga(token, query) {
  try {
    // call processedParcel Api endpoint
    return yield call([processedParcelService, 'search'], token, query);
  } catch (e) {
    // error
    // log error
    yield put(
      onProcessedParcelErrorAction({
        message:
          'An error occurred while searching processedParcels. please make sure api is running.',
      }),
    );
    return [];
  }
}

export function* processedParcelSearchSaga() {
  // get token from state
  const { token } = yield select(getLoginFromState);

  const { processedParcel } = yield select(getProcessedParcelFromState);

  // fix dates
  processedParcel.dateProcessed = processedParcel.dateProcessed
    ? moment(processedParcel.dateProcessed).format('YYYY MM DD')
    : null;
  processedParcel.dateProcessedTo = processedParcel.dateProcessedTo
    ? moment(processedParcel.dateProcessedTo).format('YYYY MM DD')
    : null;

  // convert to query string
  const query = yield call(convertToQueryString, processedParcel);

  const results = yield call(searchProcessedParcelApiSaga, token, query);

  yield put(processedParcelFetchResponseAction(results));
}

export function* processedParcelSagas() {
  yield takeLatest(
    processedParcelFetchRequestActionType,
    processedParcelFetchRequestSaga,
  );
  yield takeLatest(processedParcelSaveActionType, processedParcelSaveSaga);
  yield takeLatest(
    processedParcelSearchResetActionType,
    processedParcelSearchResetSaga,
  );
  yield takeLatest(processedParcelSearchActionType, processedParcelSearchSaga);
}
