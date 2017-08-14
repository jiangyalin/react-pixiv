import React, { Component } from 'react'
import styles from './index.scss'

export default class PixivLeftTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <p className={styles.tt}>{title}</p>
    )
  }
}