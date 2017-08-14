import React, { Component } from 'react'
import styles from './index.scss'
import img from './../../../../images/user/user-01.png'

export default class PixivLeftInfo extends Component {
  render() {
    return (
      <div className={styles.box}>
        <img className={styles.img} src={img} />
        <div className={styles.text}>
          <p className={styles.name}>一方0通行</p>
          <p className={styles.name}>18725944157</p>
        </div>
      </div>
    )
  }
}