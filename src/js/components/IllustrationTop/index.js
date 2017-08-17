import React from 'react';
import Hammer from 'react-hammerjs';

import Element from './Element';
import styles from './index.scss';
import img01 from './../../../images/top/top-01.jpg'
import img02 from './../../../images/top/top-02.jpg'
import img03 from './../../../images/top/top-03.jpg'
import img04 from './../../../images/top/top-04.jpg'
import img05 from './../../../images/top/top-05.jpg'

class IllustrationTop extends React.Component {
  render() {
    let initX = 0;
    let thisX = 0;
    let divStyle = {
      left: thisX+'px'
    };
    const PanStart = e => {
      initX = e.center.x;
    };
    const Pan = e => {
      thisX = e.center.x - initX;
      console.log(thisX);
      divStyle = {
        left: thisX+'px'
      };
    };
    return (
      <Hammer onPanStart={PanStart} onPan={Pan}>
        <div className={styles.box}>
          <div className={styles.mn} style={divStyle}>
            <Element img={img01}/>
            <Element img={img02}/>
            <Element img={img03}/>
            <Element img={img04}/>
            <Element img={img05}/>
          </div>
        </div>
      </Hammer>
    )
  }
}

export default IllustrationTop