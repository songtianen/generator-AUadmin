import * as actionTypes from '../actions/actionTypes';

const user = (state, action) => {
  if (!state) {
    state = {};
  }
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      // 登录
      return { ...state, token: action.token };
    case actionTypes.GET_USERINFO_SUCCESS:
      // 获取用户信息
      return {
        ...state,
        // name: action.name,
        // avatar: action.avatar,
        // isAdmin: action.isAdmin,
        // permission: action.permission,
      };
    case actionTypes.LOGOUT_SUCCESS:
      // 登出
      return {
        // token: state.token,
        // name: '',
        // avatar: '',
        // isAdmin: 0,
        // permission: [],
      };
    default:
      return state;
  }
};

export { user };
