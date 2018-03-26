import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.less';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.test}>jayguo</div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter;
