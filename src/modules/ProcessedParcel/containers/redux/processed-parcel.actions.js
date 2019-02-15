import { CreateAction } from '../../../../config/action-creator/create-action';

const reducerName = 'processedParcel';

const processedParcelOnChange = new CreateAction(
  reducerName,
  'ON_CHANGE_ACTION',
);
export const processedParcelOnChangeAction = processedParcelOnChange.action;
export const processedParcelOnChangeActionType =
  processedParcelOnChange.actionType;

const onProcessedParcelError = new CreateAction(reducerName, 'ON_ERROR_ACTION');
export const onProcessedParcelErrorAction = onProcessedParcelError.action;
export const onProcessedParcelErrorActionType =
  onProcessedParcelError.actionType;

const processedParcelFetchRequest = new CreateAction(
  reducerName,
  'FETCH_REQUEST',
);
export const processedParcelFetchRequestAction =
  processedParcelFetchRequest.action;
export const processedParcelFetchRequestActionType =
  processedParcelFetchRequest.actionType;

const processedParcelFetchResponse = new CreateAction(
  reducerName,
  'FETCH_RESPONSE',
);
export const processedParcelFetchResponseAction =
  processedParcelFetchResponse.action;
export const processedParcelFetchResponseActionType =
  processedParcelFetchResponse.actionType;

const processedParcelSave = new CreateAction(reducerName, 'SAVE_PAYLOAD');
export const processedParcelSaveAction = processedParcelSave.action;
export const processedParcelSaveActionType = processedParcelSave.actionType;
