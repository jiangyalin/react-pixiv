export default ( state = { count: 5 }, action ) => {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'cutback':
      return { count: count - 1 }
    default:
      return state
  }
};