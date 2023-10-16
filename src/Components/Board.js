import React from 'react';
import WinnerCalculator from '../Util/winnerCalculator';
import Square from './Square';

function Board(props) {
    const { squares, xIsNext, onPlay } = props;
    let status;
    const winner = WinnerCalculator.calculateWinner(squares);

    if (winner) {
        status = "Winner is : " + winner;
    } else {
        if (!squares.includes(null)) {

            status = "Draw";
        } else {
            status = "Next player is: " + (xIsNext ? "X" : "O");
        }
    }

    const handleClick = (i) => {
        console.log("SquareChange Initialized" + " " + i);
        if (squares[i] || winner) {
            return;
        }
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = "X";
        } else {
            newSquares[i] = "O";
        }
        onPlay(newSquares, !xIsNext);
    };

    function renderSquare(i) {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

    return (<>
        <div className='status' data-testid='status'>
            {status}
        </div>
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    </>
    );
}

export default Board;
