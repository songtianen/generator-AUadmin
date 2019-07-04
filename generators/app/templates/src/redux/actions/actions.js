import * as actionTypes from './actionTypes';

// action creators
export const login = (token) => {
  return { type: actionTypes.LOGIN_SUCCESS, token };
};
