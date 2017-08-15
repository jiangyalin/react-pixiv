import { combineReducers } from 'redux'
import cs from './cs';
import toolber from './toolber';

const rootReducer = combineReducers({
  cs,
  toolber
});

export default rootReducer;