import React from "react";
import calculateWinner from "./CalculateWinner";
import "./Moves.css";

function Moves({ currentSquares, xIsNext, userName }) {
  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Game End - Winner : " + (winner === "X" ? userName : "Computer");
  } else {
    if (currentSquares.every((el) => el !== null)) {
      status = "Game End - Stalemate";
    } else {
      status = "Next Player : " + (xIsNext ? userName : "Computer");
    }
  }

  return (
    <div className="status">
      <p className="score">{status}</p>
    </div>
  );
}
export default Moves;
