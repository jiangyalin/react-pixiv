import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';

import Element from './Element';
import styles from './index.scss';
import { setTop } from '../../actions/IllustrationTop';
import img01 from './../../../images/top/top-01.jpg'
import img02 from './../../../images/top/top-02.jpg'
import img03 from './../../../images/top/top-03.jpg'
import img04 from './../../../images/top/top-04.jpg'
import img05 from './../../../images/top/top-05.jpg'

class IllustrationTop extends React.Component {
  render() {
    let initX = 0;
    let thisX = 0;
    let hh = 0;
    let divStyle = {
      left: thisX+'px'
    };
    const PanStart = e => {
      initX = e.center.x;
      thisX = this.refs.mn.offsetLeft;
      console.log('thisX',thisX)
    };
    const Pan = e => {
      hh = thisX + e.center.x + initX;
      this.props.dispatch(setTop(hh))
      console.log(thisX);
      console.log('refs',this.refs.mn.offsetLeft);
      divStyle = {
        left: thisX+'px'
      };
    };
    return (
      <Hammer onPanStart={PanStart} onPan={Pan}>
        <div className={styles.box}>{console.log("styles.box.left",this)}
          <div className={styles.mn} style={{left: this.props.topX+'px'}} ref="mn">
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

IllustrationTop = connect(

)(IllustrationTop);

export default IllustrationTop