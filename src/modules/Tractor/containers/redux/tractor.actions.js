import { CreateAction } from '../../../../config/action-creator/create-action';

const reducerName = 'tractor';

const tractorOnChange = new CreateAction(
  reducerName,
  'TRACTOR_ON_CHANGE_ACTION',
);
export const tractorOnChangeAction = tractorOnChange.action;
export const tractorOnChangeActionType = tractorOnChange.actionType;

const onTractorError = new CreateAction(reducerName, 'ON_TRACTOR_ERROR_ACTION');
export const onTractorErrorAction = onTractorError.action;
export const onTractorErrorActionType = onTractorError.actionType;

const tractorFetchRequest = new CreateAction(
  reducerName,
  'TRACTOR_FETCH_REQUESTED',
);
export const tractorFetchRequestAction = tractorFetchRequest.action;
export const tractorFetchRequestActionType = tractorFetchRequest.actionType;

const tractorFetchResponse = new CreateAction(
  reducerName,
  'TRACTOR_FETCH_RESPONSE',
);
export const tractorFetchResponseAction = tractorFetchResponse.action;
export const tractorFetchResponseActionType = tractorFetchResponse.actionType;

const tractorSave = new CreateAction(reducerName, 'TRACTOR_SAVE_REQUEST');
export const tractorSaveAction = tractorSave.action;
export const tractorSaveActionType = tractorSave.actionType;
