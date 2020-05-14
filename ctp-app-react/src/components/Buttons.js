import React, {Component, Fragment} from 'react';
import './Buttons.css';

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

    clickLess = () => {
        this.props.lessClick();
    }

    render() {

        return(
            <Fragment>
                <button className="btnLess" onClick={this.clickLess}>{this.state.value}</button>
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

    clickDiv = () => {
        this.props.divClick();
    }

    render() {

        return(
            <Fragment>
                <button className="btnDiv" onClick={this.clickDiv}>{this.state.value}</button>
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

    clickMult = () => {
        this.props.multClick();
    }

    render() {

        return(
            <Fragment>
                <button className="btnMult" onClick={this.clickMult}>{this.state.value}</button>
            </Fragment>
        )
    }
}