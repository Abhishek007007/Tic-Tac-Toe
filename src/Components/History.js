import React from "react";
import ResetIcon from "../Assets/icons8-reset-50.png";
import UndoIcon from "../Assets/icons8-undo-50.png";
import "./History.css";

function History({ history, setHistory, setCurrentMove }) {
  function HandleUndo() {
    if (history.length > 1) {
      const prevHistory = [...history.slice(0, history.length - 2)];
      setHistory(prevHistory);
      setCurrentMove(prevHistory.length - 1);
    }
  }

  function HandleReset() {
    if (history.length > 1) {
      const prevHistory = [...history.slice(0, 1)];
      setHistory(prevHistory);
      setCurrentMove(prevHistory.length - 1);
    }
  }

  return (
    <div className="game-info">
      <button className="reset-button" onClick={HandleReset}>
        <div className="reset-div">
          <img className="reset-icon" src={ResetIcon} alt="Reset Button" />
          <p>Reset</p>
        </div>
      </button>
      <button className="undo-button" onClick={HandleUndo}>
        <div className="undo-div">
          <img className="undo-icon" src={UndoIcon} alt="Undo icon" />
          <p>Undo</p>
        </div>
      </button>
    </div>
  );
}

export default History;
