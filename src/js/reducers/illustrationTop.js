const init = {
  topX: 0
};

export default ( state = init, action ) => {
  switch (action.type) {
    case 'TURN_ON':
      return {
        ...state,
        status: !state.status
      };
    case 'IS_MN_OPEN':
      return {
        ...state,
        isMnTap: true
      };
    case 'IS_MN_OFF':
      return {
        ...state,
        isMnTap: false
      };
    default:
      return state
  }
};