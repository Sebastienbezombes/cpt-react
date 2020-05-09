/**
 * @author SebastienB
 * Licence
 * Button
 */

import React, {Component, Fragment} from 'react';
import './Number.css';

class Number extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "0"
        };
    }
    render() {

        return(
            <Fragment>
                <h1 className="number">{this.state.value}</h1>
            </Fragment>
        )
    }
}

export default Number;