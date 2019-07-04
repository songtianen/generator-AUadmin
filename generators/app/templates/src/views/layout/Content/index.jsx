import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MyNavTabs extends React.PureComponent {
  render() {
    console.log('MyNavTabs render');
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center' /* 垂直居中 */,
          justifyContent: 'center' /* 水平居中 */,
          width: '100%',
          height: '100%',
          background: '#ddd',
        }}
      >
        <div>this is content</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    openAccessMenu: state.app.openAccessMenu,
  };
};
MyNavTabs.propTypes = {
  // history: PropTypes.object.isRequired,
};
export default withRouter(connect(mapStateToProps)(MyNavTabs));
