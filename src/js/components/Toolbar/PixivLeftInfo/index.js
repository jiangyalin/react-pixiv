import React, { Component } from 'react'
import styles from './index.scss'
import img from './../../../../images/user/user-01.png'

export default class PixivLeftInfo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.box}>
        <img className={styles.img} src={data.photo} />
        <div className={styles.text}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.name}>{data.phone}</p>
        </div>
      </div>
    )
  }
}