/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from './store';
import Spin from './views/layout/Spin/Spin';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Spin />
      </Provider>
    );
  }
}

export default hot(App);
