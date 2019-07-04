import React from 'react';
// import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import PageRouters from '../../../routers/PageRouters';

class MySpin extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Spin spinning={false} size='large'>
        this is spin
        <PageRouters />
      </Spin>
    );
  }
}

MySpin.propTypes = {};

const mapStateToPorps = () => {
  // console.log('statestatestate', state)
  // const { spinLoading } = state.spin;
  return {};
};
export default connect(mapStateToPorps)(MySpin);
// export default MySpin
