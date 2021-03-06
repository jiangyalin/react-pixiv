import React from 'react';
import { connect } from 'react-redux';

import { initData, turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar, RankingTitle, IllustrationTop, IllustrationBox, Title } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, illustrationBox, illustrationTopData, homeNavData } = this.props;
    return (
      <div>{console.log(this)}
        <Toolbar
          data={dataToolbar}
          onInitData={() => {
            this.props.dispatch(initData)
          }}
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
        <HomeNav homeNavData={homeNavData}/>
        <RankingTitle/>
        <IllustrationTop illustrationTopData={illustrationTopData}/>
        <Title/>
        <IllustrationBox illustrationBox={illustrationBox} heartState={true}/>
      </div>
    )
  }
}

// const mapStateToProps = (store, ownProps) => {
const mapStateToProps = (store) => {
  return {
    dataToolbar: store.toolbar,
    illustrationBox: store.illustrationBox,
    illustrationTopData: store.illustrationTop,
    homeNavData: store.homeNav
  }
};

Home = connect(
  mapStateToProps
)(Home);

export default Home;