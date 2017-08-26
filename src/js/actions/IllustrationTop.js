import {
  ILLUSTRATION_TOP_SET_TOP_X,
  ILLUSTRATION_TOP_SET_INIT_X,
  ILLUSTRATION_TOP_SET_THIS_X,
  ILLUSTRATION_TOP_SET_DATE,
  ILLUSTRATION_TOP_SET_IMG_SIZE,
  ILLUSTRATION_TOP_COLLECTION
} from './actionsTypes';

export const setTop = (value) => ({
  type: ILLUSTRATION_TOP_SET_TOP_X,
  value
});

export const setInitX = (value) => ({
  type: ILLUSTRATION_TOP_SET_INIT_X,
  value
});

export const setThisX = (value) => ({
  type: ILLUSTRATION_TOP_SET_THIS_X,
  value
});

export const setDate = (value) => ({
  type: ILLUSTRATION_TOP_SET_DATE,
  value
});

export const setImgSize = (id, width, height) => ({
  type: ILLUSTRATION_TOP_SET_IMG_SIZE,
  id: id,
  width: width,
  height: height
});

export const setCollection = (id, collection) => ({
  type: ILLUSTRATION_TOP_COLLECTION,
  id: id,
  collection: collection
});