import React, {Component, Fragment, Children} from 'react';
import './Buttons.css';
import App from '../App';

export class ButtonAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "+"
        };
    }
    clickAdd = () => {
        this.props.addClick();
    }
    render() {
        return(
            <Fragment>
                <button className="btnAdd" onClick={this.clickAdd}>{this.state.value}</button>
            </Fragment>
        )
    }
}

export class ButtonLess extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "-"
        };
    }
    render() {

        return(
            <Fragment>
                <button className="btnLess">{this.state.value}</button>
            </Fragment>
        )
    }
}

export class ButtonDiv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "/"
        };
    }
    render() {

        return(
            <Fragment>
                <button className="btnDiv">{this.state.value}</button>
            </Fragment>
        )
    }
}

export class ButtonMult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "*"
        };
    }
    render() {

        return(
            <Fragment>
                <button className="btnMult">{this.state.value}</button>
            </Fragment>
        )
    }
}