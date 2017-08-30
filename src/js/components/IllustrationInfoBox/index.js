import React from 'react';
import {connect} from 'react-redux';

import styles from './index.scss';

class IllustrationInfoBox extends React.Component {
  render() {
    const { infoBoxData } = this.props;
    return (
      <div className={styles.box}>
        <ul className={styles.list}>
          {
            infoBoxData.map((data, index) =>
              <li className={styles.li} key={index}>
                <img className={styles.img} src={data.image}/>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

IllustrationInfoBox = connect(

)(IllustrationInfoBox);

export default IllustrationInfoBox;