import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseAction, editCs } from '../actions/cs'
import { Cs } from './../components'

class App extends React.Component {
  click = () => {
    this.props.dispatch(increaseAction({text: 'hhhh'}));
    console.log('this',this.props.value.cs)
  };
  setSet = () => {
    this.props.dispatch(editCs(0,'tt'));
  };
  render() {
    return (
      <div>
        {console.log('value',this.props.value.cs)}
        <button type="button" onClick={this.click}>++++++</button>
        <button type="button" onClick={this.setSet}>setSetSet</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
};

const mapDispatchTo = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
};

export default connect(
  mapStateToProps,
  // mapDispatchTo
)(App)