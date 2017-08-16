import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';
import { turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar, RankingTitle } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, onTurnClick, onToolbarMnOpen, onToolbarMnOff } = this.props;
    return (
      <Hammer>
        <div>
          <Toolbar
            data={dataToolbar}
            onToolbarMnOff={onToolbarMnOff}
            onToolbarMnOpen={onToolbarMnOpen}
            onTurnClick={onTurnClick}
          />
          <Nav homeClick={onTurnClick}/>
          <HomeNav/>
          <RankingTitle/>
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
      dispatch(isMnOpen);
    },
    onToolbarMnOff: () => {
      dispatch(isMnOff);
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)