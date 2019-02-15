// ONLY FOR actions like reset state. Should follow reduxs duck patten - https://github.com/erikras/ducks-modular-redux
import { CreateAction } from '../action-creator/create-action';

export const resetToInitState = new CreateAction(
  'COMMON_ACTION',
  'RESET_TO_INIT_STATE_ACTION',
);
export const resetToInitStateAction = resetToInitState.action;
