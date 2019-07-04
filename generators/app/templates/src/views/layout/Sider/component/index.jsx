import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MySiderPre from './SiderMenu';

class MySider extends React.PureComponent {
  render() {
    console.log('MySiderContainer render');
    return <MySiderPre />;
  }
}

const mapStateToProps = (state) => {
  // console.log('Sider 组件的 根包装组件', state);
  return {
    menus: state.app.moduleMenu,
    openAccessMenu: state.app.openAccessMenu,
    accessMenu: state.app.accessMenu,
  };
};

const mapDispatchToProps = () => {
  return {
    // updateModule: (module) => {
    //   dispatch(updateModule(module));
    // },
  };
};

MySider.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MySider);
