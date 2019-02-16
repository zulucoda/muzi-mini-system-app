import {
  processedParcelOnChangeActionType,
  onProcessedParcelErrorActionType,
  processedParcelFetchResponseActionType,
} from './processed-parcel.actions';

const initialSate = {
  processedParcel: {
    parcelId: 1,
    tractorId: 1,
    dateProcessed: new Date(),
    dateProcessedTo: new Date(),
    culture: '',
    area: 0,
  },
  error: {},
  errorMessage: '',
  list: [],
};

export const processedParcelReducer = (state = initialSate, action) => {
  switch (action.type) {
    case processedParcelOnChangeActionType:
      state.processedParcel[action.payload.name] = action.payload.value;
      state.error[action.payload.name] = action.payload.error;
      return { ...state };
    case onProcessedParcelErrorActionType:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case processedParcelFetchResponseActionType:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
