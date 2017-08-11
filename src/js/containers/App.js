import React from 'react';
import { Cs } from './../components';

class App extends React.Component {
  state = {
    value: 0
  };
  click = () => {
    this.setState({
      value: this.state.value+1
    })
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <Cs value={value} click={this.click}/>
      </div>
    )
  }
}

export default App