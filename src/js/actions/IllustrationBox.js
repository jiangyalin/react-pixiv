import {
  ILLUSTRATION_BOX_SET_CLIENT_WIDTH,
  ILLUSTRATION_BOX_SET_IMG_SIZE
} from './actionsTypes';

export const setClientWidth = (value) => ({
  type: ILLUSTRATION_BOX_SET_CLIENT_WIDTH,
  value
});

export const setImgSize = (id, width, height) => ({
  type: ILLUSTRATION_BOX_SET_IMG_SIZE,
  id: id,
  width: width,
  height: height
});