import img01 from './../../images/top/top-01.jpg'
import img02 from './../../images/top/top-02.jpg'
import img03 from './../../images/top/top-03.jpg'
import img04 from './../../images/top/top-04.jpg'
import img05 from './../../images/top/top-05.jpg'

const init = {
  topX: 0,
  initX: 0,
  thisX: 0,
  transitionDate: 0,
  elements: [{
    id: 0,
    image: img01,
    count: 1,
    width: 0,
    height: 0,
    name: '作品1',
    user: {
      name: '作者1',
      userImg: img03
    }
  },{
    id: 1,
    image: img02,
    count: 4,
    width: 0,
    height: 0,
    name: '作品2',
    user: {
      name: '作者2',
      userImg: img04
    }
  },{
    id: 2,
    image: img03,
    count: 1,
    width: 0,
    height: 0,
    name: '作品3',
    user: {
      name: '作者3',
      userImg: img05
    }
  },{
    id: 3,
    image: img04,
    count: 1,
    width: 0,
    height: 0,
    name: '作品4',
    user: {
      name: '作者4',
      userImg: img01
    }
  },{
    id: 4,
    image: img05,
    count: 1,
    width: 0,
    height: 0,
    name: '作品5',
    user: {
      name: '作者5',
      userImg: img02
    }
  }]
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
    case 'SET_IMG_SIZE':
      let elements = state.elements.map(data =>
        data.id == action.id ?
        {
          ...data,
          width: action.width,
          height: action.height
        }: data
      );
      return {
        ...state,
        elements: elements
      };
    default:
      return state
  }
};

export default illustrationTop;