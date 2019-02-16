import { select, call, takeLatest, put } from 'redux-saga/effects';
import { getLoginFromState } from './login.selectors';
import { loginService } from '../../../../shared/services/Login/login.service';
import {
  loginFetchRequestActionType,
  loginOnChangeAction,
  loginSetAuthTokenAction,
  logoutActionType,
  onLoginErrorAction,
  showOrHideLoadingAction,
} from './login.actions';

export function* authoriseUserSaga(email, password) {
  try {
    // call login Api endpoint with user username and password
    const loginResponse = yield call(
      [loginService, 'onLogin'],
      email,
      password,
    );

    // set auth token in store
    yield put(loginSetAuthTokenAction(loginResponse.token));

    return true;
  } catch (e) {
    // not authorised
    return false;
  }
}

export function* userLoginSaga() {
  // set loading
  yield put(showOrHideLoadingAction(true));

  // 1. get the username and password from state.
  const { login } = yield select(getLoginFromState);

  // 2. authorise the user
  const isAuthorised = yield call(
    authoriseUserSaga,
    login.email,
    login.password,
  );

  if (isAuthorised) {
    //3. remove the username and password from store
    yield put(loginOnChangeAction({ name: 'email', value: '' }));
    yield put(loginOnChangeAction({ name: 'password', value: '' }));
  } else {
    // NOT Authorised - incorrect username or password
    yield put(
      onLoginErrorAction({ message: 'incorrect username or password' }),
    );
  }

  // remove loading
  yield put(showOrHideLoadingAction(false));
}

export function* userLogoutSaga() {
  // remove token
  yield put(loginSetAuthTokenAction(null));
}

export function* loginSaga() {
  yield takeLatest(loginFetchRequestActionType, userLoginSaga);
  yield takeLatest(logoutActionType, userLogoutSaga);
}
