/**
 * @author SebastienB
 * Licence
 * Button
 */

import React, {Component, Fragment} from 'react';
import './Button.css';

export class ButtonAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "+"
        };
    }
    render() {

        return(
            <Fragment>
                <button className="btnAdd">{this.state.value}</button>
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

