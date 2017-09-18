import React from 'react';
import { connect } from 'react-redux';

import { initData, turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { FormLogin, IllustrationBox } from '../components'

class Login extends React.Component {
  render() {
    const { formLogin, illustrationBox } = this.props;
    const handleScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    return (
      <div onWheel={handleScroll}>
        <FormLogin formLogin={formLogin} />
        <IllustrationBox illustrationBox={illustrationBox} heartState={false} />
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return{
    illustrationBox: store.illustrationBox,
    formLogin: store.formLogin
  }
};

Login = connect(
  mapStateToProps
)(Login);

export default Login;