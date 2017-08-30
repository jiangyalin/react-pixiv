import { combineReducers } from 'redux'
import toolbar from './toolbar';
import illustrationTop from './illustrationTop';
import illustrationBox from './illustrationBox';
import homeNav from './homeNav';
import illustrationInfoBox from './illustrationInfoBox';
import infoNav from './infoNav';

const rootReducer = combineReducers({
  toolbar,
  illustrationTop,
  illustrationBox,
  homeNav,
  illustrationInfoBox,
  infoNav
});

export default rootReducer;