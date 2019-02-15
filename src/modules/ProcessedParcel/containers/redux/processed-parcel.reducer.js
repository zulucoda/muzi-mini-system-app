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
    area: 0,
  },
  errorMessage: '',
  list: [],
};

export const processedParcelReducer = (state = initialSate, action) => {
  switch (action.type) {
    case processedParcelOnChangeActionType:
      state.processedParcel[action.payload.name] = action.payload.value;
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
