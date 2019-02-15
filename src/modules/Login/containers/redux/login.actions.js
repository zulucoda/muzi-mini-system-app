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
