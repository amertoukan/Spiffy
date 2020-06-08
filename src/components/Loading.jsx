import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';

export default class Loading extends Component {
    render() {
        return (
            <i className = "fa fa-circle-o-notch fa-spin fa-3x fa-fw"/>
        )
    }
}
