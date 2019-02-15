import { combineReducers } from 'redux';
import { loginReducer } from '../modules/Login/containers/redux/login.reducer';
import { parcelReducer } from '../modules/Parcel/containers/redux/parcel.reducer';
import { tractorReducer } from '../modules/Tractor/containers/redux/tractor.reducer';
import { processedParcelReducer } from '../modules/ProcessedParcel/containers/redux/processed-parcel.reducer';

export const rootReducers = combineReducers({
  loginReducer,
  parcelReducer,
  tractorReducer,
  processedParcelReducer,
});
