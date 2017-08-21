import React from 'react';
import {connect} from 'react-redux';

import styles from './index.scss';

class Title extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <i className={"fa fa-heart " + styles.heart}/>
        <p className={styles.p}>为你推荐</p>
      </div>
    )
  }
}

Title = connect(

)(Title);

export default Title;