import React from 'react';
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs';

import Element from './Element';
import styles from './index.scss';
import { setTop, setInitX, setThisX, setDate } from '../../actions/IllustrationTop';

class IllustrationTop extends React.Component {
  render() {
    const data = this.props.illustrationTopData;
    const PanStart = e => {
      this.props.dispatch(setInitX(e.center.x));
      this.props.dispatch(setThisX(data.topX));
      this.props.dispatch(setDate(0));
    };
    const Pan = e => {
      let mobile = data.thisX + e.center.x - data.initX;
      const isCrossBorder = mobile > 0 || this.refs.box.clientWidth - this.refs.mn.clientWidth > mobile;
      if (!isCrossBorder) this.props.dispatch(setTop(mobile));
    };
    const PanEnd = e => {
      let count = 0;
      const isRight = data.initX - e.center.x > 0;
      if (isRight) {
        count = Math.floor(data.topX / 264);
      } else{
        count = Math.ceil(data.topX / 264);
      }
      let date = Math.abs((count * 264 - data.topX) / 264) * .5;
      this.props.dispatch(setDate(date));
      this.props.dispatch(setTop(count*264));
    };
    return (
      <Hammer onPanStart={PanStart} onPan={Pan} onPanEnd={PanEnd}>
        <div className={styles.box} ref="box">
          <div
            className={styles.mn}
            style={{transform: 'translate3d(' + data.topX + 'px,0px,0px)',
            transition: + data.transitionDate + 's',
            width: 264 * data.elements.length + 'px'}}
            ref="mn">
            {
              data.elements.map((data, index) =>
                <Element
                  key={index}
                  img={data.image}
                  count={data.count}
                  width={data.width}
                  height={data.height}
                  name={data.name}
                  id={data.id}
                  user={data.user}
                  collection={data.collection}/>
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