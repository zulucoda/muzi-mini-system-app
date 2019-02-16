import {
  tractorOnChangeActionType,
  onTractorErrorActionType,
  tractorFetchResponseActionType,
} from './tractor.actions';

const initialSate = {
  tractor: {
    name: '',
  },
  errorMessage: '',
  error: {},
  list: [],
};

export const tractorReducer = (state = initialSate, action) => {
  switch (action.type) {
    case tractorOnChangeActionType:
      state.tractor[action.payload.name] = action.payload.value;
      state.error[action.payload.name] = action.payload.error;
      return { ...state };
    case onTractorErrorActionType:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    case tractorFetchResponseActionType:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
