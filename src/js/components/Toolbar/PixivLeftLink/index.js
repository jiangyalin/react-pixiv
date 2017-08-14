import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class PixivLeftLink extends Component {
  render() {
    const { path, icon, text } = this.props;
    return (
      <Link to={path}>
        <div className={styles.box}>
          <i className={'fa '+icon+' '+styles.fa}></i>
          <span className={styles.text}>{text}</span>
        </div>
      </Link>
    )
  }
}