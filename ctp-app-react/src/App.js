import React, { Component, Fragment } from 'react';
import './reset.css';
import {ButtonAdd, ButtonLess, ButtonDiv, ButtonMult} from './components/Buttons';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>0</h1>
        <ButtonAdd/>
        <ButtonLess/>
        <ButtonDiv/>
        <ButtonMult/>
      </Fragment>
    );
  }
}
export default App;