import { combineReducers } from 'redux'
import cs from './cs';
import toolber from './toolber';
import illustrationTop from './illustrationTop';

const rootReducer = combineReducers({
  cs,
  toolber,
  illustrationTop
});

export default rootReducer;