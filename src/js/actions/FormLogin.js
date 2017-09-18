import {
  FORM_LOGIN_INPUT_ACTIVE
} from './actionsTypes';

export const setInputActive = (id, status) => ({
  type: FORM_LOGIN_INPUT_ACTIVE,
  id: id,
  status: status
});