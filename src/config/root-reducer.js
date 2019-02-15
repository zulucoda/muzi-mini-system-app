import { combineReducers } from 'redux';
import { loginReducer } from '../modules/Login/containers/redux/login.reducer';

export const rootReducers = combineReducers({
  loginReducer,
});
