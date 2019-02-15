import { CreateAction } from '../../../../config/action-creator/create-action';

const reducerName = 'parcel';

const parcelOnChange = new CreateAction(reducerName, 'PARCEL_ON_CHANGE_ACTION');
export const parcelOnChangeAction = parcelOnChange.action;
export const parcelOnChangeActionType = parcelOnChange.actionType;

const onParcelError = new CreateAction(reducerName, 'ON_PARCEL_ERROR_ACTION');
export const onParcelErrorAction = onParcelError.action;
export const onParcelErrorActionType = onParcelError.actionType;

const parcelFetchRequest = new CreateAction(
  reducerName,
  'PARCEL_FETCH_REQUESTED',
);
export const parcelFetchRequestAction = parcelFetchRequest.action;
export const parcelFetchRequestActionType = parcelFetchRequest.actionType;

const parcelFetchResponse = new CreateAction(
  reducerName,
  'PARCEL_FETCH_RESPONSE',
);
export const parcelFetchResponseAction = parcelFetchResponse.action;
export const parcelFetchResponseActionType = parcelFetchResponse.actionType;

const parcelSave = new CreateAction(reducerName, 'PARCEL_SAVE_REQUEST');
export const parcelSaveAction = parcelSave.action;
export const parcelSaveActionType = parcelSave.actionType;
