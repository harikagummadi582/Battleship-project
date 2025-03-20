// Grid.js
import React from "react";
import Cell from "./Cell"; // Import the Cell component

const Board = () => {
  const rows = 10; // Number of rows
  const cols = 10; // Number of columns

  // Create an array of rows and columns dynamically
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const colsArray = [];
    for (let j = 0; j < cols; j++) {
      colsArray.push(<Cell key={`${i}-${j}`} />);
    }
    grid.push(
      <div key={i} className="board-row">
        {colsArray}
      </div>
    );
  }

  return <div className="container text-center">{grid}</div>;
};

export default Board;
