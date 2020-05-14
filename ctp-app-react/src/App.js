import React, { Component } from 'react';
import './reset.css';
import './App.css';
import {ButtonAdd, ButtonLess, ButtonDiv, ButtonMult} from './components/Buttons';

class App extends Component {

  state = {
    cpt: 0
  }

  clickAddValue = () => {
    console.log(12345)
    console.log(this.state.cpt)
    //{this.state.cpt+=1}
    let add = this.state.cpt+=1
    this.setState({
      cpt: add
    })
  }

  render() {
    return (
      <div className="document">
        
          <h1 className="number">{this.state.cpt}</h1>
        
        <div className="buttonsList">
          <ButtonDiv/>
          <ButtonLess/>
          <ButtonAdd addClick={this.clickAddValue}/>
          <ButtonMult/>
        </div>

      </div>
    );
  }
}
export default App;