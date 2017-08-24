import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import { setClientWidth, setImgWidth } from './../../../actions/IllustrationBox';

class Illustration extends React.Component {
  ImgLoad = () => {
    console.log(this)
    this.props.dispatch(setImgWidth(800));
    this.img(this.props.img,this.props.width / 2 - 2,this.props.width / 2 - 2)
  };
  img = (src, width, height) => {
    let image = new Image();
    image.src = src;
    image.onload = function () {
      if(image.width / width > image.height / height){
        console.log("111");
        // src.addClass("s-img-wh").removeClass("s-img-ht");
      }else{
        console.log("222");
        // src.addClass("s-img-ht").removeClass("s-img-wh");
      }
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
      <div className={styles.box} style={{width: this.props.width / 2 - 2 + 'px',height: this.props.width / 2 - 2 + 'px'}}>
        <img className={styles.img} src={this.props.img} style={{width: this.props.width + 'px',height: this.props.height + 'px'}} onClick={this.ImgLoad} ref="img"/>
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