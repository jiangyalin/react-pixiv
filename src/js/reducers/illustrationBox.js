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
    width: 0,
    height: 0
  },{
    id: 2,
    image: img02,
    count: 1,
    width: 0,
    height: 0
  },{
    id: 3,
    image: img03,
    count: 1,
    width: 0,
    height: 0
  },{
    id: 4,
    image: img04,
    count: 1,
    width: 0,
    height: 0
  },{
    id: 5,
    image: img05,
    count: 1,
    width: 0,
    height: 0
  }]
};

const illustrationBox = ( state = init, action ) => {
  switch (action.type) {
    case 'SET_CLIENT_WIDTH':
      return{
        ...state,
        clientWidth: action.value
      };
    case 'SET_IMG_SIZE':
      let Illustrations = state.Illustrations.map(data =>
        data.id == action.id ?
        {
          ...data,
          width: action.width,
          height: action.height
        }: data
      );
      return {
        ...state,
        Illustrations: Illustrations
      };
    default:
      return state
  }
};

export default illustrationBox;