import React from 'react';
import styles from './index.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <i className={styles.bars+' fa fa-bars'}></i>
        <span className={styles.tt}>主页</span>
        <ul className={styles.fr}>
          <li className={styles.li+' '+styles.active}>
            <i className={'fa fa-home '+styles.fa}></i>
            <span className={styles.nav}>主页</span>
          </li>
          <li className={styles.li}>
            <i className={'fa fa-leaf '+styles.fa}></i>
            <span className={styles.nav}>最新</span>
          </li>
          <li className={styles.li}>
            <i className={'fa fa-search '+styles.fa}></i>
            <span className={styles.nav}>搜索</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav