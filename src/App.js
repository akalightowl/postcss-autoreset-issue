import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}> 
          <form className={styles.form}>
            <label className={styles.formLabel} for="email">input text:</label>
            <input className={styles.formInput} name="email" id="email" type="email" />
            <button className={styles.btn} type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
