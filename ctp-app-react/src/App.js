import React, { Component } from 'react';
import './reset.css';
import './App.css';
import {ButtonAdd, ButtonLess, ButtonDiv, ButtonMult} from './components/Buttons';

class App extends Component {

  state = {
    cpt: 0
  }

  clickDivValue = () => {
    let divi = this.state.cpt/=2
    this.setState({
      cpt: divi
    })
  }

  clickLessValue = () => {
    let less = this.state.cpt-=1
    this.setState({
      cpt: less
    })
  }

  clickAddValue = () => {
    let add = this.state.cpt+=1
    this.setState({
      cpt: add
    })
  }

  clickMultValue = () => {
    let mult = this.state.cpt*=2
    this.setState({
      cpt: mult
    })
  }

  render() {
    return (
      <div className="document">
        
          <h1 className="number">{this.state.cpt}</h1>
        
        <div className="buttonsList">
          <ButtonDiv divClick={this.clickDivValue}/>
          <ButtonLess lessClick={this.clickLessValue}/>
          <ButtonAdd addClick={this.clickAddValue}/>
          <ButtonMult multClick={this.clickMultValue}/>
        </div>

      </div>
    );
  }
}
export default App;