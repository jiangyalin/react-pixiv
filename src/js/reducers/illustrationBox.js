import {
  ILLUSTRATION_BOX_SET_CLIENT_WIDTH,
  ILLUSTRATION_BOX_SET_IMG_SIZE,
  ILLUSTRATION_BOX_COLLECTION
} from './../actions/actionsTypes';

import img01 from './../../images/illustration/img-01.jpg'
import img02 from './../../images/illustration/img-02.jpg'
import img03 from './../../images/illustration/img-03.png'
import img04 from './../../images/illustration/img-04.jpg'
import img05 from './../../images/illustration/img-05.png'
import img06 from './../../images/illustration/img-06.png'
import img07 from './../../images/illustration/img-07.png'
import img08 from './../../images/illustration/img-08.png'
import img09 from './../../images/illustration/img-09.png'
import img10 from './../../images/illustration/img-10.png'

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
  },{
    id: 16,
    image: img06,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 17,
    image: img07,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 18,
    image: img08,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 19,
    image: img09,
    count: 1,
    width: 0,
    height: 0,
    collection: false
  },{
    id: 20,
    image: img10,
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
        data.id === action.id ?
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
        data.id === action.id ?
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