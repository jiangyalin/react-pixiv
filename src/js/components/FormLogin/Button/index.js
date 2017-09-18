import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './index.scss';

class Button extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.box}>
        <Link to="/">
          <button className={styles.title} type="button">{title}</button>
        </Link>
      </div>
    )
  }
}

Button = connect(

)(Button);

export default Button