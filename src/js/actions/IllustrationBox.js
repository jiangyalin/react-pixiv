export const setClientWidth = (value) => ({
  type: 'SET_CLIENT_WIDTH',
  value
});

export const setImgSize = (id, width, height) => ({
  type: 'SET_IMG_SIZE',
  id: id,
  width: width,
  height: height
});