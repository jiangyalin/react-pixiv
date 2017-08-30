import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import styles from './index.scss';
import { setState } from '../../actions/InfoNav';

class InfoNav extends React.Component {
  Tap = () => {
    this.props.dispatch(setState(!this.props.infoNavData.state));
  };
  Click = (e) => {
    console.log('e', e);
    console.log('this', this);
    e.stopPropagation();
    console.log("kkk")
  };
  render() {
    const { infoNavData } = this.props;
    window.document.onclick = () => {
      if (this.props.infoNavData.state) {
        this.props.dispatch(setState(!this.props.infoNavData.state));
      }
    };
    let shield = '';
    if (infoNavData.state) {
      shield = <div className={styles.shield} onClick={this.Click}>
                 <p className={styles.text}>屏蔽设定</p>
               </div>
    }
    return (
      <div className={styles.box}>
        <Link to="/" className={styles.return}>
          <i className={'fa fa-angle-left ' + styles.angle}/>
        </Link>
        <div className={styles.share_mn} onClick={this.Tap}>
          <i className={'fa fa-ellipsis-v ' + styles.ellipsis}/>
        </div>
        <div className={styles.share_mn}>
          <i className={'fa fa-share-alt ' + styles.share}/>
        </div>
        {
          shield
        }
      </div>
    )
  }
}

InfoNav = connect(

)(InfoNav);

export default InfoNav;