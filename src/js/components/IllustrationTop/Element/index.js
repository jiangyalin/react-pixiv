import React from 'react';

import styles from './index.scss';

class Element extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div className={styles.box}>
        <img className={styles.img} src={img}/>
      </div>
    )
  }
}

export default Element