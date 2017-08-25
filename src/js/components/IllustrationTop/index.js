import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';

import Element from './Element';
import styles from './index.scss';
import { setTop, setInitX, setThisX, setDate } from '../../actions/IllustrationTop';

class IllustrationTop extends React.Component {
  render() {
    const PanStart = e => {
      this.props.dispatch(setInitX(e.center.x));
      this.props.dispatch(setThisX(this.props.illustrationTopData.topX));
      this.props.dispatch(setDate(0));
    };
    const Pan = e => {
      let mobile = this.props.illustrationTopData.thisX + e.center.x - this.props.illustrationTopData.initX;
      const isCrossBorder = mobile > 0 || this.refs.box.clientWidth - this.refs.mn.clientWidth > mobile;
      if (!isCrossBorder) this.props.dispatch(setTop(mobile));
    };
    const PanEnd = e => {
      let count = 0;
      const isRight = this.props.illustrationTopData.initX - e.center.x > 0;
      if (isRight) {
        count = Math.floor(this.props.illustrationTopData.topX / 264);
      } else{
        count = Math.ceil(this.props.illustrationTopData.topX / 264);
      }
      let date = Math.abs((count * 264 - this.props.illustrationTopData.topX) / 264) * .5;
      this.props.dispatch(setDate(date));
      this.props.dispatch(setTop(count*264));
    };
    return (
      <Hammer onPanStart={PanStart} onPan={Pan} onPanEnd={PanEnd}>
        <div className={styles.box} ref="box">
          <div
            className={styles.mn}
            style={{transform: 'translate3d(' + this.props.illustrationTopData.topX + 'px,0px,0px)',transition: + this.props.illustrationTopData.transitionDate + 's'}}
            ref="mn">
            {
              this.props.illustrationTopData.elements.map((data, index) =>
                <Element
                  key={index}
                  img={data.image}
                  count={data.count}
                  width={data.width}
                  height={data.height}
                  name={data.name}
                  id={data.id}
                  user={data.user}/>
              )
            }
          </div>
        </div>
      </Hammer>
    )
  }
}

IllustrationTop = connect(

)(IllustrationTop);

export default IllustrationTop