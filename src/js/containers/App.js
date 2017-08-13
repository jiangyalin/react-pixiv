import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseAction, cutbackAction } from '../actions/cs'
import { Cs } from './../components'

class App extends React.Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <Cs value={value} onclick1={onIncreaseClick}/>
        <div>{value}</div>
        <button type="button" onClick={onIncreaseClick}>kkk</button>
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    value: state.count
  }
};

const mapDispatchTo = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchTo
)(App)