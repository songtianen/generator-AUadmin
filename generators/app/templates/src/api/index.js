import qs from 'qs';
import request from '../util/request';

export function loginByUsername(username, password) {
  console.log('http loginByUsername ------', username, password);
  const data = {
    username,
    password,
  };
  return request({
    url: '/user/login',
    method: 'post',
    data: qs.stringify(data),
    loading: 'spin',
  });
}
