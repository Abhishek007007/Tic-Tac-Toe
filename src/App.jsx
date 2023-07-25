import { useEffect, useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import Moves from "./Components/Moves.js";
import History from "./Components/History";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  useEffect(() => {
    function computerPlay(idx) {
      const nextSquares = currentSquares.slice();
      nextSquares[idx] = "O";
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function linesThatare(a, b, c) {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map(
          (index) => currentSquares[index]
        );
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    }

    if (!xIsNext && !currentSquares.every((el) => el !== null)) {
      const winningLines = linesThatare("O", "O", null);
      if (winningLines.length > 0) {
        const winIndex = winningLines[0].filter(
          (index) => currentSquares[index] === null
        )[0];
        computerPlay(winIndex);
        return;
      }

      const lineToBlock = linesThatare("X", "X", null);
      if (lineToBlock.length > 0) {
        const blockIndex = lineToBlock[0].filter(
          (index) => currentSquares[index] === null
        )[0];
        computerPlay(blockIndex);
        return;
      }

      const linesToContinue = linesThatare("O", null, null);
      if (linesToContinue.length > 0) {
        const lineIndex = linesToContinue[0].filter(
          (index) => currentSquares[index] === null
        )[0];
        computerPlay(lineIndex);
        return;
      }
      const emptyIndex = currentSquares
        .map((square, index) => (square === null ? index : null))
        .filter((val) => val !== null);

      const randomIndex =
        emptyIndex[Math.ceil(Math.random() * emptyIndex.length)];
      computerPlay(randomIndex);
      return;
    }
  }, [xIsNext, currentSquares, currentMove, history]);

  return (
    <div className="game">
      <Moves currentSquares={currentSquares} xIsNext={xIsNext} />
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <History
        history={history}
        setCurrentMove={setCurrentMove}
        setHistory={setHistory}
      />
    </div>
  );
}

export default Game;
