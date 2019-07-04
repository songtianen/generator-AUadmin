import { combineReducers } from 'redux';
import { app } from './reducer/app';
import { user } from './reducer/user';
import * as constants from './constants/constants';

// reducer 的入口文件
const rootReducer = combineReducers({
  [constants.USER]: user,
  [constants.APP]: app,
});
export default rootReducer;
