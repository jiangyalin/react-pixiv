import img01 from './../../images/top/top-01.jpg'
import img02 from './../../images/top/top-02.jpg'
import img03 from './../../images/top/top-03.jpg'
import img04 from './../../images/top/top-04.jpg'
import img05 from './../../images/top/top-05.jpg'

const init = {
  clientWidth: 640,
  Illustrations: [{
    image: img01,
    count: 4,
    width: 100,
    height: 100
  },{
    image: img02,
    count: 1,
    width: 100,
    height: 100
  },{
    image: img03,
    count: 1,
    width: 100,
    height: 100
  },{
    image: img04,
    count: 1,
    width: 100,
    height: 100
  },{
    image: img05,
    count: 1,
    width: 100,
    height: 100
  }]
};

const illustrationBox = ( state = init, action ) => {
  switch (action.type) {
    case 'SET_CLIENT_WIDTH':
      return{
        ...state,
        clientWidth: action.value
      };
    case 'SET_IMG_WIDTH':
      return{
        ...state,
        clientWidth: action.width
      };
    default:
      return state
  }
};

export default illustrationBox;