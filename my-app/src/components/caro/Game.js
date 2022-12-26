import React, { useState } from "react";
import Board from "./Board";
import "./BoardStyles.css";

const defaultBoard = Array(9).fill(null);
const Game = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [isXTurn, setXTurn] = useState(true);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index]) return;
    boardCopy[index] = isXTurn ? "X" : "O";
    setBoard(boardCopy);
    setXTurn(!isXTurn);
  };

  const handleResetGame = () => {
    setBoard(defaultBoard);
  };

  return (
    <div>
      <Board board={board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>New Game</button>
    </div>
  );
};

export default Game;
