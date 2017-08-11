import React from 'react';
import { aa } from '../../actions/Cs';

class Cs extends React.Component {
  render() {
    const { value, onclick1 } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onclick1}>点{onclick1}击 + 1</button>
      </div>
    )
  }
}

export default Cs