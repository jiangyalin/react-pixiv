import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';

import Element from './Element';
import styles from './index.scss';
import { setTop, setInitX, setThisX, setDate } from '../../actions/IllustrationTop';
import img01 from './../../../images/top/top-01.jpg'
import img02 from './../../../images/top/top-02.jpg'
import img03 from './../../../images/top/top-03.jpg'
import img04 from './../../../images/top/top-04.jpg'
import img05 from './../../../images/top/top-05.jpg'

class IllustrationTop extends React.Component {
  render() {
    const PanStart = e => {
      this.props.dispatch(setInitX(e.center.x));
      this.props.dispatch(setThisX(this.props.topX));
      this.props.dispatch(setDate(0));
    };
    const Pan = e => {
      let mobile = this.props.thisX + e.center.x - this.props.initX;
      const isCrossBorder = mobile > 0 || this.refs.box.clientWidth - this.refs.mn.clientWidth > mobile;
      if (!isCrossBorder) this.props.dispatch(setTop(mobile));
    };
    const PanEnd = e => {
      let count = 0;
      const isRight = this.props.initX - e.center.x > 0;
      if (isRight) {
        count = Math.floor(this.props.topX / 263);
      } else{
        count = Math.ceil(this.props.topX / 263);
      }
      let date = Math.abs((count * 263 - this.props.topX) / 263) * .5;
      this.props.dispatch(setDate(date));
      this.props.dispatch(setTop(count*263));
    };
    return (
      <Hammer onPanStart={PanStart} onPan={Pan} onPanEnd={PanEnd}>
        <div className={styles.box} ref="box">
          <div className={styles.mn} style={{transform: 'translate3d(' + this.props.topX + 'px,0px,0px)',transition: + this.props.date + 's'}} ref="mn">
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