/**
 * @author SebastienB
 * Licence
 * Button
 */

import React, {Component, Fragment} from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "+"
        };
    }
    render() {

        return(
            <Fragment>
                <button className="btn">{this.state.value}</button>
            </Fragment>
        )
    }
}

export default Button;