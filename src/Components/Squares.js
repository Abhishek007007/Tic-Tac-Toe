import React from "react";
import "../App.css";

function Square({ value, onSquareClick }) {
  const SquareStyle = value === "X" ? "square x" : "square o";
  return (
    <button onClick={onSquareClick} className={SquareStyle}>
      {value}
    </button>
  );
}

export default Square;
