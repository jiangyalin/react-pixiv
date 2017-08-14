import React from 'react';
import { render } from 'react-dom';
import { Nav, HomeNav, Toolbar } from './../components';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <HomeNav/>
        <Toolbar/>
      </div>
    )
  }
}

export default Home