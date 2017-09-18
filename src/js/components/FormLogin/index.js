import React from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';
import Input from './Input';
import Button from './Button';

class FormLogin extends React.Component {
  render() {
    const { formLogin } = this.props;
    return (
      <div className={styles.box}>
        <p className={styles.title}>pixiv</p>
        <div className={styles.form}>
          {
            formLogin.input.map((data, index) =>
              <Input key={index} id={data.id} status={data.status} title={data.title} type={data.type}/>
            )
          }
        </div>
        <Button title="登陆"/>
      </div>
    )
  }
}

FormLogin = connect(

)(FormLogin);

export default FormLogin