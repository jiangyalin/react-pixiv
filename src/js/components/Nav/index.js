import React from 'react';
import { Link } from 'react-router';
import Hammer from 'react-hammerjs';
import styles from './index.scss';

class Nav extends React.Component {
  render() {
    const { homeClick } = this.props;
    return (
      <div className={styles.box}>
        <Hammer onTap={homeClick}>
          <i className={styles.bars+' fa fa-bars'}/>
        </Hammer>
        <span className={styles.tt}>主页</span>
        <ul className={styles.fr}>
          <li className={styles.li}>
            <Link to="/" activeClassName={styles.active}>
              <i className={'fa fa-home '+styles.fa}/>
              <span className={styles.nav}>主页</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="" activeClassName={styles.active}>
              <i className={'fa fa-leaf '+styles.fa}/>
              <span className={styles.nav}>最新</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="" activeClassName={styles.active}>
              <i className={'fa fa-search '+styles.fa}/>
              <span className={styles.nav}>搜索</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav