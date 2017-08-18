import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';
import { turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { setTop } from '../actions/IllustrationTop';
import { Nav, HomeNav, Toolbar, RankingTitle, IllustrationTop } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, onTurnClick, onToolbarMnOpen, onToolbarMnOff, onSetTop } = this.props;
    return (
      <Hammer>
        <div>
          <div onClick={() => {
            this.props.dispatch(setTop(7))
          }}>gfdsg</div>
          <Toolbar
            data={dataToolbar}
            onToolbarMnOff={() => {
              this.props.dispatch(isMnOff)
            }}
            onToolbarMnOpen={() => {
              this.props.dispatch(isMnOpen)
            }}
            onTurnClick={() => {
              this.props.dispatch(turn)
            }}
          />
          <Nav homeClick={() => {
              this.props.dispatch(turn)
            }}/>
          {this.props.illustrationTopX}
          {console.log('this.props',this.props)}
          <HomeNav/>
          <RankingTitle/>
          <IllustrationTop topX={this.props.illustrationTopX}/>
        </div>
      </Hammer>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    dataToolbar: store.toolber,
    userInfo: store.toolber.userInfo,
    illustrationTopX: store.illustrationTop.topX,
    store: store,
    ownProps: ownProps
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    onTurnClick: () => {
      console.log(dispatch);
      dispatch(turn);
    },
    onToolbarMnOpen: () => {
      dispatch(isMnOpen);
    },
    onToolbarMnOff: () => {
      dispatch(isMnOff);
    },
    onSetTop: () => {
      console.log('hh',getState);
      dispatch(setTop(7));
    }
  }
};

Home = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);

export default Home;