const init = {
  topX: 0,
  initX: 0,
  thisX: 0,
  transitionDate: 0
};

const illustrationTop = ( state = init, action ) => {
  switch (action.type) {
    case 'SET_TOP_X':
      return{
        ...state,
        topX: action.value
      };
    case 'SET_INIT_X':
      return{
        ...state,
        initX: action.value
      };
    case 'SET_THIS_X':
      return{
        ...state,
        thisX: action.value
      };
    case 'SET_DATE':
      return{
        ...state,
        transitionDate: action.value
      };
    default:
      return state
  }
};

export default illustrationTop;