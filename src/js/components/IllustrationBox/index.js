import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import Illustration from './Illustration';
import img01 from './../../../images/top/top-01.jpg'
import img02 from './../../../images/top/top-02.jpg'
import img03 from './../../../images/top/top-03.jpg'
import img04 from './../../../images/top/top-04.jpg'
import img05 from './../../../images/top/top-05.jpg'

class IllustrationBox extends React.Component {
  width = 375;
  render() {
    return (
      <div>
        <div className={styles.box} style={{width: this.width + 4 + 'px'}} ref="box">
          <Illustration width={this.width} img={img05}/>
          <Illustration width={this.width} img={img04}/>
          <Illustration width={this.width} img={img03}/>
          <Illustration width={this.width} img={img02}/>
          <Illustration width={this.width} img={img01}/>
        </div>
        {console.log(this.refs.box)}
      </div>
    )
  }
}

IllustrationBox = connect(

)(IllustrationBox);

export default IllustrationBox