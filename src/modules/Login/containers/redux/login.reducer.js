import {
  loginOnChangeActionType,
  onLoginErrorActionType,
} from './login.actions';

const initialSate = {
  login: {
    email: '',
    password: '',
  },
  errorMessage: '',
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
    default:
      return state;
  }
};
