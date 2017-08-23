import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';
import { turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar, RankingTitle, IllustrationTop, IllustrationBox, Title } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, initX, thisX, date, illustrationBox } = this.props;
    return (
      <Hammer>
        <div>
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
          <HomeNav/>
          <RankingTitle/>
          <IllustrationTop topX={this.props.illustrationTopX} initX={initX} thisX={thisX} date={date}/>
          <Title/>
          <IllustrationBox illustrationBox={illustrationBox}/>
          {this.props.illustrationTopX}
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
    initX: store.illustrationTop.initX,
    thisX: store.illustrationTop.thisX,
    date: store.illustrationTop.transitionDate,
    store: store,
    ownProps: ownProps,
    illustrationBox: store.illustrationBox
  }
};

Home = connect(
  mapStateToProps
)(Home);

export default Home;