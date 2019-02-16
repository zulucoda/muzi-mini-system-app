import { CreateAction } from '../../../../config/action-creator/create-action';

const reducerName = 'login';

const loginOnChange = new CreateAction(reducerName, 'LOGIN_ON_CHANGE_ACTION');
export const loginOnChangeAction = loginOnChange.action;
export const loginOnChangeActionType = loginOnChange.actionType;

const onLoginError = new CreateAction(reducerName, 'ON_LOGIN_ERROR_ACTION');
export const onLoginErrorAction = onLoginError.action;
export const onLoginErrorActionType = onLoginError.actionType;

const loginFetchRequest = new CreateAction(
  reducerName,
  'LOGIN_FETCH_REQUESTED',
);
export const loginFetchRequestAction = loginFetchRequest.action;
export const loginFetchRequestActionType = loginFetchRequest.actionType;

const loginSetAuthToken = new CreateAction(reducerName, 'LOGIN_SET_AUTH_TOKEN');
export const loginSetAuthTokenAction = loginSetAuthToken.action;
export const loginSetAuthTokenActionType = loginSetAuthToken.actionType;

const logout = new CreateAction(reducerName, 'LOGOUT');
export const logoutAction = logout.action;
export const logoutActionType = logout.actionType;

// This should be in the App Reducer - for prototype I am leaving it in login Reducer
const showOrHideLoading = new CreateAction(reducerName, 'LOADING');
export const showOrHideLoadingAction = showOrHideLoading.action;
export const showOrHideLoadingActionType = showOrHideLoading.actionType;
