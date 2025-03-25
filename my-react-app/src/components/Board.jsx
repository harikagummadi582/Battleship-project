import React, { use } from "react";
import Cell from "./Cell";
import { useFreeplayContext } from "../context/FreeplayContext";

const Board = ({ cellStates, handleCellClick ,getButtonClass}) => {
  const rows = 10;
  const cols = 10;

  // Create the grid with cells
  const grid = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push(
        <Cell
          key={`${i}-${j}`}
          row={i}
          col={j}
          clicked={cellStates[i][j]} // Pass the clicked state of each cell
          onClick={handleCellClick} 
          getButtonClass={getButtonClass}// Pass the handleCellClick function
        />
      );
    }
  }

  return <div className="board center">{grid}</div>;
};

export default Board;
