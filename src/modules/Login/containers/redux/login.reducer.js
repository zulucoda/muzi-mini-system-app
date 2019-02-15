import { CreateAction } from '../../../../config/action-creator/create-action';
import { resetToInitState } from '../../../../config/common-action/common.action';

const reducerName = 'login';

const loginOnChange = new CreateAction(reducerName, 'LOGIN_ON_CHANGE_ACTION');
export const loginOnChangeAction = loginOnChange.action;

const onLoginError = new CreateAction(reducerName, 'ON_LOGIN_ERROR_ACTION');
export const onLoginErrorAction = onLoginError.action;

const initialSate = {
  login: {
    email: '',
    password: '',
  },
  errorMessage: '',
};

export const loginReducer = (state = initialSate, action) => {
  switch (action.type) {
    case loginOnChange.actionType:
      state.login[action.payload.name] = action.payload.value;
      return { ...state };
    case onLoginError.actionType:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case resetToInitState.actionType:
      return {
        ...initialSate,
      };
    default:
      return state;
  }
};
