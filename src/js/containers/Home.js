import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';
import { turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, onTurnClick, onToolbarMnOpen, onToolbarMnOff, onToolbarMnTap } = this.props;
    return (
      <Hammer>
        <div>
          <Nav homeClick={onTurnClick}/>
          <HomeNav/>
          <Toolbar data={dataToolbar} onToolbarMnOff={onToolbarMnOff} onToolbarMnOpen={onToolbarMnOpen} onTurnClick={onTurnClick}/>
        </div>
      </Hammer>
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
    onTurnClick: () => {
      dispatch(turn);
    },
    onToolbarMnOpen: () => {
      console.log("pppp")
      dispatch(isMnOpen);
    },
    onToolbarMnOff: () => {
      dispatch(isMnOff);
    },
    onToolbarMnTap: () => {
      dispatch(isMnOff);
      dispatch(turn);
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)