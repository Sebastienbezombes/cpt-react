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
            value: "+"
        };
    }
    render() {

        return(
            <Fragment>
                <h1 className="number">0</h1>
            </Fragment>
        )
    }
}

export default Number;