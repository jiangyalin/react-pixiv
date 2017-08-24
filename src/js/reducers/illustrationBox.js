import img01 from './../../images/top/top-01.jpg'
import img02 from './../../images/top/top-02.jpg'
import img03 from './../../images/top/top-03.jpg'
import img04 from './../../images/top/top-04.jpg'
import img05 from './../../images/top/top-05.jpg'

const init = {
  clientWidth: 640,
  Illustrations: [{
    id: 1,
    image: img01,
    count: 4,
    width: 100,
    height: 100
  },{
    id: 2,
    image: img02,
    count: 1,
    width: 300,
    height: 200
  },{
    id: 3,
    image: img03,
    count: 1,
    width: 100,
    height: 100
  },{
    id: 4,
    image: img04,
    count: 1,
    width: 100,
    height: 100
  },{
    id: 5,
    image: img05,
    count: 1,
    width: 100,
    height: 100
  }]
};

const illustrationBoxB = ( state, action ) => {
  switch (action.type) {
    case 'SET_CLIENT_WIDTH':
      return{
        ...state,
        clientWidth: action.value
      };
    case 'SET_IMG_WIDTH':
      return {
        ...state,
        width: 200
      };
    default:
      return state
  }
};

const illustrationBox = ( state = init, action ) => {
  switch (action.type) {
    case 'SET_CLIENT_WIDTH':
      return{
        ...state,
        clientWidth: action.value
      };
    case 'SET_IMG_WIDTH':
      return state.Illustrations.map(data =>
        illustrationBoxB(data, action)
      );
      // return{
      //   ...state.Illustrations[3],
      //   width: action.width
      // };
    default:
      return state
  }
};

export default illustrationBox;