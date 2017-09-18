import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import { setInputActive } from '../../../actions/FormLogin';

class Input extends React.Component {
  render() {
    const { id, status, title, type } = this.props;
    let tt_active = '';
    let ipt_active = '';
    if (status) tt_active = styles.tt_active;
    if (status) ipt_active = styles.ipt_active;
    const focus = () => {
      this.props.dispatch(setInputActive(id, true));
    };
    const blur = () => {
      const value = document.getElementById('input'+id).value;
      if(value == '') this.props.dispatch(setInputActive(id, false));
    };
    return (
      <div className={styles.box}>
        <span className={styles.title + ' ' + tt_active}>{title}</span>
        <input id={'input'+id} className={styles.input + ' ' + ipt_active} type={type} onFocus={focus} onBlur={blur} value=""/>
      </div>
    )
  }
}

Input = connect(

)(Input);

export default Input