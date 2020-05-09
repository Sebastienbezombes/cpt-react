import React, { Component, Fragment } from 'react';
import './reset.css';
import {ButtonAdd, ButtonLess} from './components/ButtonAdd';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonAdd/>
        <ButtonLess/>
      </Fragment>
    );
  }
}
export default App;