import React from "react";
import calculateWinner from "./CalculateWinner";
import Square from "./Squares";
import "../App.css";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      return;
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="game-board">
        {squares.map((value, idx) => {
          return (
            <Square
              key={idx}
              value={value}
              onSquareClick={() => handleClick(idx)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Board;
