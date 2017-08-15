import React from 'react';
import { connect } from 'react-redux';
import { turn } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, onTurnClick } = this.props;
    return (
      <div>
        <Nav homeClick={onTurnClick}/>
        <HomeNav/>
        <Toolbar data={dataToolbar} onclick={onTurnClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataToolbar: state.toolber,
    userInfo: state.toolber.userInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTurnClick: () => dispatch(turn)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)