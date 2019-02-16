import {
  loginOnChangeActionType,
  onLoginErrorActionType,
  loginSetAuthTokenActionType,
} from './login.actions';

const initialSate = {
  login: {
    email: '',
    password: '',
  },
  errorMessage: '',
  token: null,
};

export const loginReducer = (state = initialSate, action) => {
  switch (action.type) {
    case loginOnChangeActionType:
      state.login[action.payload.name] = action.payload.value;
      return { ...state };
    case onLoginErrorActionType:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case loginSetAuthTokenActionType:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
