import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import { setImgSize } from './../../../actions/IllustrationBox';

class Illustration extends React.Component {
  ImgLoad = () => {
    this.imgReSize(this.props.img, this.props.clientWidth / 2 - 2, this.props.clientHeight / 2 - 2);
  };
  imgReSize = (src, width, height) => {
    let image = new Image();
    image.src = src;
    if(image.width / width > image.height / height){
      this.props.dispatch(setImgSize(this.props.id, (this.props.clientHeight / 2 - 2) * image.width / image.height, this.props.clientHeight / 2 - 2));
    }else{
      this.props.dispatch(setImgSize(this.props.id, this.props.clientWidth / 2 - 2, (this.props.clientWidth / 2 - 2) * image.height / image.width));
    }
  };
  render() {
    let count = '';
    if(this.props.count > 1) {
      count = <div className={styles.count}>
                <i className={"fa fa-clone " + styles.clone}/>
                <span className={styles.sn}>{this.props.count}</span>
              </div>;
    }
    return (
      <div className={styles.box} style={{width: this.props.clientWidth / 2 - 2 + 'px',height: this.props.clientHeight / 2 - 2 + 'px'}}>
        <img className={styles.img} src={this.props.img} style={{width: this.props.width + 'px',height: this.props.height + 'px'}} onLoad={this.ImgLoad} ref="img"/>
        <div className={styles.heart}>
          <div className={styles.heart_mn}></div>
        </div>
        {count}
      </div>
    )
  }
}

Illustration = connect(
  
)(Illustration);

export default Illustration