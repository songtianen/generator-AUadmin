import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';

import './index.less';

const { Sider } = Layout;

class SubMenuList extends React.PureComponent {
  componentDidMount() {
    // console.log('SiderMenu 的 props', this.props);
  }

  render() {
    return (
      <Sider style={{ backgroundColor: 'pink' }}>
        <div className='logo'>
          {/* <img src={logo} alt='logo' /> */}
          <span>AU-andmin</span>
        </div>
        this is sider
      </Sider>
    );
  }
}

SubMenuList.propTypes = {
  // responsive: PropTypes.bool.isRequired,
  // collapsed: PropTypes.bool.isRequired,
  // menus: PropTypes.array.isRequired,
  // openMenu: PropTypes.func.isRequired,
  // selectedKeys: PropTypes.string,
  // openKeys: PropTypes.array.isRequired,
};
export default SubMenuList;
