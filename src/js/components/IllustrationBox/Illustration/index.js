import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './index.scss';
import { setImgSize, setCollection } from './../../../actions/IllustrationBox';

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
  Collection = () => {
    this.props.dispatch(setCollection(this.props.id, !this.props.collection))
  };
  render() {
    const { id, clientWidth, clientHeight, img, count, width, height, collection, heartState } = this.props;
    let countHtml = '';
    if(count > 1 && heartState) {
      countHtml = <div className={styles.count}>
                <i className={"fa fa-clone " + styles.clone}/>
                <span className={styles.sn}>{count}</span>
              </div>;
    }
    const isHeart = collection;
    let heartStyle = '';
    if (isHeart) {
      heartStyle = styles.heart_mn_active;
    } else {
      heartStyle = styles.heart_mn;
    }
    let heart = '';
    if(heartState) {
      heart = <div className={styles.heart} onClick={this.Collection}>
        <div className={heartStyle}></div>
      </div>
    }
    return (
      <Link className={styles.box} to={'/' + id} style={{width: clientWidth / 2 - 2 + 'px',height: clientHeight / 2 - 2 + 'px'}}>
        <img
          className={styles.img}
          src={img}
          style={{width: width + 'px',height: height + 'px'}}
          onLoad={this.ImgLoad}/>
        {heart}
        {countHtml}
      </Link>
    )
  }
}

Illustration = connect(
  
)(Illustration);

export default Illustration