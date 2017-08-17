import React from 'react';
import styles from './index.scss';

class RankingTitle extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <i className={'fa fa-diamond '+styles.diamond}/>
        <p className={styles.tt}>排行榜</p>
        <div className={styles.more}>
          <p className={styles.p}>查看更多</p>
          <i className={'fa fa-angle-right '+styles.angle}/>
        </div>
      </div>
    )
  }
}

export default RankingTitle