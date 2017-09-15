import {
  TOOLBAR_DATA,
  TOOLBAR_INIT,
  TOOLBAR_TURN_ON,
  TOOLBAR_IS_MN_OPEN,
  TOOLBAR_IS_MN_OFF
} from './actionsTypes'

export const initData = { type: TOOLBAR_DATA };
export const init = (userInfo) => ({
  type: TOOLBAR_INIT,
  userInfo
});
export const turn = { type: TOOLBAR_TURN_ON };
export const isMnOpen = { type: TOOLBAR_IS_MN_OPEN };
export const isMnOff = { type: TOOLBAR_IS_MN_OFF };
