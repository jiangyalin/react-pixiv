import React from 'react'
import Hammer from 'react-hammerjs';
import PixivLeftLink from './PixivLeftLink'
import PixivLeftInfo from './PixivLeftInfo'
import PixivLeftTitle from './PixivLeftTitle'
import styles from './index.scss'

class Toolbar extends React.Component {
  onToolbarMnTap = () => {
    if(!this.props.data.isMnTap) {
      this.props.onTurnClick();
    }
  };
  render() {
    const { data, onToolbarMnOff, onToolbarMnOpen } = this.props;
    let active = '';
    if(data.status) {
      active = styles.active;
    }
    return (
      <Hammer onTap={this.onToolbarMnTap}>
        <div className={styles.box+' '+active}>
          <div className={styles.bd} onTouchStart={onToolbarMnOpen} onTouchEnd={onToolbarMnOff}>
            <div className={styles.mn}>
              <PixivLeftInfo data={data.userInfo}/>
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
      </Hammer>
    )
  }
}

export default Toolbar