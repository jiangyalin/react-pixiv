import { combineReducers } from 'redux'
import toolbar from './toolbar';
import illustrationTop from './illustrationTop';
import illustrationBox from './illustrationBox';
import homeNav from './homeNav';

const rootReducer = combineReducers({
  toolbar,
  illustrationTop,
  illustrationBox,
  homeNav
});

export default rootReducer;