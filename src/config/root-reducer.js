import { combineReducers } from 'redux';
import { loginReducer } from '../modules/Login/containers/redux/login.reducer';
import { parcelReducer } from '../modules/Parcel/containers/redux/parcel.reducer';

export const rootReducers = combineReducers({
  loginReducer,
  parcelReducer,
});
