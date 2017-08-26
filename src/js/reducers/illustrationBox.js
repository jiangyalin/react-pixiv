import {
  ILLUSTRATION_BOX_SET_CLIENT_WIDTH,
  ILLUSTRATION_BOX_SET_IMG_SIZE,
  ILLUSTRATION_BOX_COLLECTION
} from './../actions/actionsTypes';

import img01 from './../../images/top/top-01.jpg'
import img02 from './../../images/top/top-02.jpg'
import img03 from './../../images/top/top-03.jpg'
import img04 from './../../images/top/top-04.jpg'
import img05 from './../../images/top/top-05.jpg'

const init = {
  clientWidth: 640,
  Illustrations: [{
    id: 11,
    image: img01,
    count: 4,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 12,
    image: img02,
    count: 1,
    width: 0,
    height: 0,
    collection: true
  },{
    id: 13,
    image: img03,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 14,
    image: img04,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 15,
    image: img05,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  }]
};

const illustrationBox = ( state = init, action ) => {
  switch (action.type) {
    case ILLUSTRATION_BOX_SET_CLIENT_WIDTH:
      return{
        ...state,
        clientWidth: action.value
      };
    case ILLUSTRATION_BOX_SET_IMG_SIZE:
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
    case ILLUSTRATION_BOX_COLLECTION:
      let Illustrations_2 = state.Illustrations.map(data =>
        data.id == action.id ?
        {
          ...data,
          collection: action.collection
        }: data
      );
      return {
        ...state,
        Illustrations: Illustrations_2
      };
    default:
      return state
  }
};

export default illustrationBox;