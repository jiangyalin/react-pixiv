import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';

class Illustration extends React.Component {
  width = this.props.width / 2 - 2;
  render() {
    return (
      <div className={styles.box} style={{width: this.width + 'px',height: this.width + 'px'}}>
        <img className={styles.img} src={this.props.img}/>
      </div>
    )
  }
}

Illustration = connect(

)(Illustration);

export default Illustration