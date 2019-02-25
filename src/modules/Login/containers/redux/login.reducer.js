import {
  loginOnChangeActionType,
  onLoginErrorActionType,
  loginSetAuthTokenActionType,
  showOrHideLoadingActionType,
} from './login.actions';

const initialSate = {
  login: {
    email: '',
    password: '',
  },
  errorMessage: '',
  // REMOVE BEFORE DEPLOY
  token: 'some fake token ',

  // This should be in the App Reducer - for prototype I am leaving it in login Reducer
  isLoading: false,
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

    case showOrHideLoadingActionType:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
