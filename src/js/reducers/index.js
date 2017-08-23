import { combineReducers } from 'redux'
import cs from './cs';
import toolber from './toolber';
import illustrationTop from './illustrationTop';
import illustrationBox from './illustrationBox';

const rootReducer = combineReducers({
  cs,
  toolber,
  illustrationTop,
  illustrationBox
});

export default rootReducer;