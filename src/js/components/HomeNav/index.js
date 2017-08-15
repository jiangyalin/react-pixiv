import React from 'react';
import { Link } from 'react-router';
import styles from './index.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <ul className={styles.lst}>
          <li className={styles.li}>
            <Link to="/" className={styles.li} activeClassName={styles.active}>
              <span className={styles.sn}>插画</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="" className={styles.li} activeClassName={styles.active}>
            <span className={styles.sn}>漫画</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="" className={styles.li} activeClassName={styles.active}>
            <span className={styles.sn}>小说</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav