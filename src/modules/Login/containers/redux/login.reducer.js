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
  //DEV ONLY REMOVE BEFORE SUBMTTING
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUwMTQzODE1fQ.HYvJ0nQNyYpNh5dN6KqQRIB7Yg-HFvOqV2_BYOIiKbY',
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
