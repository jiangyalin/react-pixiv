import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { children } =this.props;
    return children
  }
}

export default connect(

)(App)