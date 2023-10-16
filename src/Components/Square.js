import React from 'react';

function Square(props) {
    return (
        <button className="square" data-testid="Square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;
