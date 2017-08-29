import React from 'react';
import {connect} from 'react-redux';

import styles from './index.scss';

class IllustrationInfoBox extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <ul className={styles.list}>
          <li className={styles.li}>
            <img className={styles.img} src=""/>
          </li>
        </ul>
      </div>
    )
  }
}

IllustrationInfoBox = connect(

)(IllustrationInfoBox);

export default IllustrationInfoBox;