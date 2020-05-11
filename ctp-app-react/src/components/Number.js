/**
 * @author SebastienB
 * Licence
 * Button
 */

import React, {Component, Fragment} from 'react';
import './Number.css';
import { createPortal } from 'react-dom';

class Number extends Component {
    
        state = {
            result: 0,
        };


    

    render() {

        return(
            <Fragment>
                <h1 className="number">{this.state.result}</h1>
            </Fragment>
        )
    }
}

export default Number;