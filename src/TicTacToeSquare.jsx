import React from 'react';

const TicTacToeSquare = (props) => {

    const clas = props.className ? `${props.className} square` : `square`;
    return (
        <>
            <span
            className={clas + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </span>

        </>

    )

};

export default TicTacToeSquare;