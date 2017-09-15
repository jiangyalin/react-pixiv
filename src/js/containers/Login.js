import React from 'react';
import { connect } from 'react-redux';

import { initData, turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { FormLogin, IllustrationBox } from '../components'

class Login extends React.Component {
  render() {
    const { illustrationBox } = this.props;
    return (
      <div>
        <FormLogin/>
        <IllustrationBox illustrationBox={illustrationBox} heartState={false} />
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return{
    illustrationBox: store.illustrationBox
  }
};

Login = connect(
  mapStateToProps
)(Login);

export default Login;