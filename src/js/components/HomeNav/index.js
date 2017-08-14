import React from 'react';
import styles from './index.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <ul className={styles.lst}>
          <li className={styles.li}>
            <span className={styles.sn+' '+styles.active}>插画</span>
          </li>
          <li className={styles.li}>
            <span className={styles.sn}>漫画</span>
          </li>
          <li className={styles.li}>
            <span className={styles.sn}>小说</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav