import React from 'react';

class Cs extends React.Component {
  render() {
    const { value, click } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={ () => {
          click(this.props.value)
        }}>点击+1</button>
      </div>
    )
  }
}

export default Cs