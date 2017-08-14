import React from 'react'
import PixivLeftLink from './PixivLeftLink'
import PixivLeftInfo from './PixivLeftInfo'
import PixivLeftTitle from './PixivLeftTitle'
import styles from './index.scss'

const Toolbar = ({props}) => {
  return (
    <div className={styles.box}>
      <div className={styles.bd}>
        <div className={styles.mn}>
          <PixivLeftInfo/>
          <ul className={styles.lst}>
            <li className={styles.li}>
              <PixivLeftLink path="" icon="fa-home" text="主页"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-lemon-o" text="最新"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-search" text="搜索"/>
            </li>
          </ul>
          <ul className={styles.lst}>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-image" text="你的作品"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-heart" text="收集"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-clock-o" text="浏览记录"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-bookmark" text="热门标签"/>
            </li>
          </ul>
          <ul className={styles.lst}>
            <li>
              <PixivLeftTitle title="其他"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-comment" text="问题反馈"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-question-circle-o" text="帮助"/>
            </li>
            <li className={styles.li}>
              <PixivLeftLink path="/" icon="fa-cog" text="设置"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Toolbar