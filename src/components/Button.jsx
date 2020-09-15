import React from 'react';

function Button(props) {
    if (!props.isSigned) {
        return (
            <a className="button registration" href="#" onChange={this.props.change}>{props.text}</a>)
    }
    else {
        return (
            <a className="button" href="#" onChange={this.props.change}>{props.text}</a>)
    }
}

export default Button;