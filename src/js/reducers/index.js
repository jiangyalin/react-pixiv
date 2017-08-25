import { combineReducers } from 'redux'
import cs from './cs';
import toolbar from './toolbar';
import illustrationTop from './illustrationTop';
import illustrationBox from './illustrationBox';

const rootReducer = combineReducers({
  cs,
  toolbar,
  illustrationTop,
  illustrationBox
});

export default rootReducer;