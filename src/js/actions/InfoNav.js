import {
  INFO_NAV_SET_STATE
} from './actionsTypes';

export const setState = (state) => ({
  type: INFO_NAV_SET_STATE,
  state
});