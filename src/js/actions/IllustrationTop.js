export const setTop = (value) => ({
  type: 'SET_TOP_X',
  value
});

export const setInitX = (value) => ({
  type: 'SET_INIT_X',
  value
});

export const setThisX = (value) => ({
  type: 'SET_THIS_X',
  value
});

export const setDate = (value) => ({
  type: 'SET_DATE',
  value
});

export const setImgSize = (id, width, height) => ({
  type: 'SET_IMG_SIZE',
  id: id,
  width: width,
  height: height
});