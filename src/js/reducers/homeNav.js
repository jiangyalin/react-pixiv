import {
  HOME_NAV_SET_SCROLL_TOP
} from './../actions/actionsTypes';

const init = {
  scrollTop: 0
};

const homeNav = ( state = init, action ) => {
  switch (action.type) {
    case HOME_NAV_SET_SCROLL_TOP:
      return{
        ...state,
        scrollTop: action.scrollTop
      };
    default:
      return state
  }
};

export default homeNav;