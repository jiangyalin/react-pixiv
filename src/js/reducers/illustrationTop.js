const init = {
  topX: 0
};

const illustrationTop = ( state = [], action ) => {
  switch (action.type) {
    case 'SET_TOP':
      return{
        ...state,
        topX: action.text
      };
    default:
      return state
  }
};

export default illustrationTop;