import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import styles from './index.scss';
import { setScrollTop } from '../../actions/HomeNav';

class Nav extends React.Component {

  render() {

    const data = this.props;

    const getScrollTop = () => {
      var scrollPos;
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset; }
      else if (document.compatMode && document.compatMode != 'BackCompat')
      { scrollPos = document.documentElement.scrollTop; }
      else if (document.body) { scrollPos = document.body.scrollTop; }
      return scrollPos;
    };

    window.addEventListener('scroll', function () {
      // console.log("kkk");
      // if (data.homeNavData.scrollTop != getScrollTop()) {
          // data.dispatch(setScrollTop(getScrollTop()));
      // }
    });

    let active = '';
    // if (this.props.homeNavData.scrollTop > 100) {
    //   active = styles.box_active;
    // }

    return (
      <div className={styles.box + ' ' + active}>
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

Nav = connect(

)(Nav);

export default Nav