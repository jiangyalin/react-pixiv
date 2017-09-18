import {
  FORM_LOGIN_INPUT_ACTIVE
} from './../actions/actionsTypes';

const init = {
  k: false,
  input: [{
    id: 1,
    type: 'text',
    status: false,
    title: 'pixiv ID或邮箱地址'
  }, {
    id: 2,
    type: 'password',
    status: false,
    title: '密码'
  }]
};

const formLogin = ( state = init, action ) => {
  switch (action.type) {
    case FORM_LOGIN_INPUT_ACTIVE:
      let input = state.input.map(data =>
      data.id == action.id ?
      {
        ...data,
        status: action.status
      }: data
      );
      return {
        ...state,
        input: input
      };
    default:
      return state
  }
};

export default formLogin;