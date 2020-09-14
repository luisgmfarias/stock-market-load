import React from 'react';

function Button(props) {
    return (
        <a className="button" href="#">{props.text}</a>
    )

}

export default Button;