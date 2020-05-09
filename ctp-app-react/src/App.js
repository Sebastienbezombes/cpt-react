import React, { Component, Fragment } from 'react';
import './reset.css';
import './App.css';
import {ButtonAdd, ButtonLess, ButtonDiv, ButtonMult} from './components/Buttons';
import Number from './components/Number';

class App extends Component {
  render() {
    return (
      <div className="document">
        <Number/>
        <div className="buttonsList">
          <ButtonDiv/>
          <ButtonLess/>
          <ButtonAdd/>
          <ButtonMult/>
        </div>

      </div>
    );
  }
}
export default App;