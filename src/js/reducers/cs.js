const init = {
  name: 'f',
  node: [{
    id: 0,
    text: 5
  },{
    id: 1,
    text: 5
  }]
};

const cs = ( state = init, action ) => {
  const count = state.count;
  switch (action.type) {
    case 'ADD_CS':
      return [
        {
          id: action.id,
          text: action.text
        },
        ...state
      ];
    case 'EDIT_CS':
      let node = state.node.map(data =>
        data.id == action.id ?
        {
          ...data,
          text: 'kkkk'
        }: data
      );
      return {
        ...state,
        node: node
      };
    default:
      return state
  }
};

export default cs;