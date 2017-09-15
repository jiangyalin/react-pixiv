import {
  TOOLBAR_DATA,
  TOOLBAR_INIT,
  TOOLBAR_TURN_ON,
  TOOLBAR_IS_MN_OPEN,
  TOOLBAR_IS_MN_OFF
} from './../actions/actionsTypes'

const init = {
  status: false,
  isMnTap: false,
  userInfo: {
    name: '一方通行',
    phone: '18725944157',
    photo: ''
  },
  navInfo: [{
    path: '/',
    icon: 'fa-home',
    text: '主页'
  },{
    path: '/',
    icon: 'fa-leaf',
    text: '最新'
  },{
    path: '/',
    icon: 'fa-search',
    text: '搜索'
  }],
  personalNavInfo: [{
    path: '/',
    icon: 'fa-image',
    text: '你的作品'
  },{
    path: '/',
    icon: 'fa-heart',
    text: '收集'
  },{
    path: '/',
    icon: 'fa-clock-o',
    text: '浏览记录'
  },{
    path: '/',
    icon: 'fa-bookmark',
    text: '热门标签'
  }],
  otherNavInfo: {
    title: '其他',
    node: [{
      path: '/',
      icon: 'fa-comment',
      text: '问题反馈'
    },{
      path: '/',
      icon: 'fa-question-circle-o',
      text: '帮助'
    },{
      path: '/',
      icon: 'fa-cog',
      text: '设置'
    }]
  }
};

export default ( state = init, action ) => {
  switch (action.type) {
    case TOOLBAR_DATA:
      return {
        ...state
      };
    case TOOLBAR_INIT:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case TOOLBAR_TURN_ON:
      return {
        ...state,
        status: !state.status
      };
    case TOOLBAR_IS_MN_OPEN:
      return {
        ...state,
        isMnTap: true
      };
    case TOOLBAR_IS_MN_OFF:
      return {
        ...state,
        isMnTap: false
      };
    default:
      return state
  }
};