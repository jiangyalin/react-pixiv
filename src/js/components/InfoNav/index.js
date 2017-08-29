import React from 'react';
import {connect} from 'react-redux';

import styles from './index.scss';

class InfoNav extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.return}>
          <i className={'fa fa-angle-left ' + styles.left}/>
        </div>
      </div>
    )
  }
}

InfoNav = connect(

)(InfoNav);

export default InfoNav;