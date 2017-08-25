import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';
import { turn, isMnOpen, isMnOff } from '../actions/Toolbar';
import { Nav, HomeNav, Toolbar, RankingTitle, IllustrationTop, IllustrationBox, Title } from './../components';

class Home extends React.Component {
  render() {
    const { dataToolbar, illustrationBox, illustrationTopData } = this.props;
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
          <IllustrationTop illustrationTopData={illustrationTopData}/>
          <Title/>
          <IllustrationBox illustrationBox={illustrationBox}/>
        </div>
      </Hammer>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    dataToolbar: store.toolber,
    illustrationBox: store.illustrationBox,
    illustrationTopData: store.illustrationTop
  }
};

Home = connect(
  mapStateToProps
)(Home);

export default Home;