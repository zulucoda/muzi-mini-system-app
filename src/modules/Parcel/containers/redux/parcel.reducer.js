import {
  parcelOnChangeActionType,
  onParcelErrorActionType,
  parcelFetchResponseActionType,
} from './parcel.actions';

const initialSate = {
  parcel: {
    name: '',
    culture: '',
    area: 0,
  },
  errorMessage: '',
  list: [],
};

export const parcelReducer = (state = initialSate, action) => {
  switch (action.type) {
    case parcelOnChangeActionType:
      state.parcel[action.payload.name] = action.payload.value;
      return { ...state };
    case onParcelErrorActionType:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case parcelFetchResponseActionType:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
