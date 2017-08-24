let i = 2;

export const increaseAction = (data) => ({
  type: 'ADD_CS',
  id: i++,
  text: data.text
});

export const editCs = (id, text) => ({
  type: 'EDIT_CS',
  id: id,
  text: text
});