import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import MyHeader from './Header';
import Footer from './Footer';
import Sider from './Sider';
import MyNavTabs from './Content/index';
// import reduxUser from '../../../redux/redux_user';
// import reduxApp from '../../../redux/redux_app';
import './layout.less';

const { Content } = Layout;
const { MySider } = Sider;
// const { updateUserInfo } = reduxUser.actions;

// const { updateAccessMenu } = reduxApp.actions;
class MyLayout extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        this is Layout Component!
        <MySider />
        <Layout>
          <MyHeader />
          <Content style={{ overflow: 'auto', background: '#e0e0e0' }}>
            <MyNavTabs />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToPorps = (state) => {
  // console.log('app state', state)
  const { name } = state.user;
  return {
    name,
  };
};
const mapDispatchToProps = () => {
  return {
    // updateUserInfo: (info) => {
    //   dispatch(updateUserInfo(info));
    // },
    // updateAccessMenu: (accessMenu) => {
    //   dispatch(updateAccessMenu(accessMenu));
    // },
  };
};
MyLayout.propTypes = {};

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(MyLayout);
