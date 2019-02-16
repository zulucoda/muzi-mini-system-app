import { select, call, takeLatest, put } from 'redux-saga/effects';
import { tractorService } from '../../../../shared/services/Tractor/tractor.service';
import {
  tractorFetchRequestActionType,
  onTractorErrorAction,
  tractorFetchResponseAction,
  tractorSaveActionType,
} from './tractor.actions';
import { getLoginFromState } from '../../../Login/containers/redux/login.selectors';
import { getTractorFromState } from './tractor.selectors';
import { showOrHideLoadingAction } from '../../../Login/containers/redux/login.actions';

export function* fetchTractorApiSaga(token) {
  try {
    // call tractor Api endpoint
    return yield call([tractorService, 'fetchTractor'], token);
  } catch (e) {
    // error
    // log error
    yield put(
      onTractorErrorAction({
        message:
          'An error occurred while fetching tractors. please make sure api is running.',
      }),
    );
    return [];
  }
}

export function* tractorFetchRequestSaga() {
  // set loading
  yield put(showOrHideLoadingAction(true));

  // get token from state
  const { token } = yield select(getLoginFromState);

  const results = yield call(fetchTractorApiSaga, token);

  // save results
  yield put(tractorFetchResponseAction(results));

  // remove loading
  yield put(showOrHideLoadingAction(false));
}

function* saveTractorApiSaga(token, payload) {
  try {
    // call tractor Api endpoint
    return yield call([tractorService, 'saveTractor'], token, payload);
  } catch (e) {
    // error
    // log error
    yield put(
      onTractorErrorAction({
        message:
          'An error occurred while saving tractor. please make sure api is running.',
      }),
    );
    return null;
  }
}

export function* tractorSaveSaga() {
  // set loading
  yield put(showOrHideLoadingAction(true));

  // get token from state
  const { token } = yield select(getLoginFromState);

  // get payload
  const { tractor } = yield select(getTractorFromState);

  const result = yield call(saveTractorApiSaga, token, tractor);

  if (result) {
    // update state
    yield call(tractorFetchRequestSaga);

    // back
    window.history.back();
  }

  // remove loading
  yield put(showOrHideLoadingAction(false));
}

export function* tractorSagas() {
  yield takeLatest(tractorFetchRequestActionType, tractorFetchRequestSaga);
  yield takeLatest(tractorSaveActionType, tractorSaveSaga);
}
