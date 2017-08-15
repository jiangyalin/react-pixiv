import React from 'react'
import PixivLeftLink from './PixivLeftLink'
import PixivLeftInfo from './PixivLeftInfo'
import PixivLeftTitle from './PixivLeftTitle'
import styles from './index.scss'

class Toolbar extends React.Component {
  render() {
    const { data, onclick } = this.props;
    let active = '';
    if(data.status) {
      active = styles.active;
    }
    return (
      <div className={styles.box+' '+active} onClick={onclick}>
        <div className={styles.bd}>
          <div className={styles.mn}>
            <PixivLeftInfo data={data.userInfo} />
            <ul className={styles.lst}>
              {
                data.navInfo.map((value, index) =>
                  <li className={styles.li} key={index}>
                    <PixivLeftLink path={value.path} icon={value.icon} text={value.text}/>
                  </li>
                )
              }
            </ul>
            <ul className={styles.lst}>
              {
                data.personalNavInfo.map((value, index) =>
                  <li className={styles.li} key={index}>
                    <PixivLeftLink path={value.path} icon={value.icon} text={value.text}/>
                  </li>
                )
              }
            </ul>
            <ul className={styles.lst}>
              <li>
                <PixivLeftTitle title={data.otherNavInfo.title}/>
              </li>
              {
                data.otherNavInfo.node.map((value, index) =>
                  <li className={styles.li} key={index}>
                    <PixivLeftLink path={value.path} icon={value.icon} text={value.text}/>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar