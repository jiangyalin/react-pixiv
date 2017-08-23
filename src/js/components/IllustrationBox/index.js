import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import Illustration from './Illustration';
import { setClientWidth } from './../../actions/IllustrationBox';

class IllustrationBox extends React.Component {
  load = () => {
    this.props.dispatch(setClientWidth(this.refs.box.clientWidth));
  };
  render() {
    return (
      <div ref="box" onLoad={this.load}>
        <div className={styles.box} style={{width: this.props.illustrationBox.clientWidth + 4 + 'px'}}>
          {
            this.props.illustrationBox.Illustrations.map((data, index) =>
              <Illustration key={index} width={this.props.illustrationBox.clientWidth} clientWidth={this.props.illustrationBox.clientWidth} img={data.image} count={data.count} width={data.width} height={data.height}/>
            )
          }
        </div>
      </div>
    )
  }
}

IllustrationBox = connect(

)(IllustrationBox);

export default IllustrationBox