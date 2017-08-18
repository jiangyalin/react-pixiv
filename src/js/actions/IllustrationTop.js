let nextTodoId = 0;

export const setTop = (text) => ({
  type: 'SET_TOP',
  id: nextTodoId++,
  text
});