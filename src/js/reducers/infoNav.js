import {
  INFO_NAV_SET_STATE
} from './../actions/actionsTypes';

const init = {
  state: false
};

const homeNav = ( state = init, action ) => {
  switch (action.type) {
    case INFO_NAV_SET_STATE:
      return{
        ...state,
        state: action.state
      };
    default:
      return state
  }
};

export default homeNav;