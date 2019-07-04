import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import './index.less';

const { Header } = Layout;

class MyHeader extends React.PureComponent {
  render() {
    console.log('MyHeader render'); // withRouter的缘故，每次点击同一个菜单，都会re-render
    return (
      <Header
        style={{
          height: '50px',
          width: '100%',
          backgroundColor: 'red',
          borderBottom: 'solid 1px #e8e8e8',
          boxSizing: 'border-box',
          padding: 0,
          position: 'fixed',
          zIndex: 100,
        }}
      >
        this is Header
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    avatar: state.user.avatar,
    currentModule: state.app.currentModule,
    moduleList: state.app.moduleList,
    accessMenu: state.app.accessMenu,
  };
};
const mapDispatchToProps = () => {
  return {
    updateModule: () => {
      // dispatch(updateModule(module));
    },
  };
};

MyHeader.propTypes = {};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyHeader),
);
