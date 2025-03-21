import React from "react";
import { useGameContext } from "../context/GameContext";
import Cell from "./Cell";

const Board = () => {
  const { cellStates, handleCellClick } = useGameContext();

  const rows = 10;
  const cols = 10;

  // Create the grid with cells
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const colsArray = [];
    for (let j = 0; j < cols; j++) {
      colsArray.push(
        <Cell
          key={`${i}-${j}`}
          row={i}
          col={j}
          clicked={cellStates[i][j]} // Pass the clicked state of each cell
          onClick={handleCellClick} // Pass the handleCellClick function
        />
      );
    }
    grid.push(
      <div key={i} className="row">
        {colsArray}
      </div>
    );
  }

  return <div className="container text-center">{grid}</div>;
};

export default Board;
