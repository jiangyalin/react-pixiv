import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import { setImgSize } from './../../../actions/IllustrationTop';

class Element extends React.Component {
  ImgLoad = () => {
    this.imgReSize(this.props.img, 250, 250);
  };
  imgReSize = (src, width, height) => {
    let image = new Image();
    image.src = src;
    if(image.width / width > image.height / height){
      this.props.dispatch(setImgSize(this.props.id, 250 * image.width / image.height, 250));
    }else{
      this.props.dispatch(setImgSize(this.props.id, 250, 250 * image.height / image.width));
    }
  };
  render() {
    const { img } = this.props;
    return (
      <div className={styles.box}>
        <img className={styles.img} src={img}  style={{width: this.props.width + 'px',height: this.props.height + 'px'}} onLoad={this.ImgLoad}/>
      </div>
    )
  }
}

Element = connect(

)(Element);

export default Element