import React, { createContext, useContext, useState, useEffect } from "react";

const BOARD_SIZE = 10; // Size of the board
const SHIP_SIZES = [5, 4, 3, 3, 2]; // Ship sizes

// Function to check if a ship can be placed at a given position
function canPlaceShip(board, shipSize, x, y, direction) {
  if (direction === "H") {
    // Horizontal placement
    if (y + shipSize > BOARD_SIZE) return false; // Check if it fits in the row
    for (let i = 0; i < shipSize; i++) {
      if (board[x][y + i] !== 0) return false; // Check if the spot is already occupied
    }
  } else if (direction === "V") {
    // Vertical placement
    if (x + shipSize > BOARD_SIZE) return false; // Check if it fits in the column
    for (let i = 0; i < shipSize; i++) {
      if (board[x + i][y] !== 0) return false; // Check if the spot is already occupied
    }
  }
  return true;
}

// Function to place a ship on the board, 1 == ship, 0 == empty
function placeShip(board, shipSize) {
  let placed = false;
  while (!placed) {
    const direction = Math.random() < 0.5 ? "H" : "V"; // Randomly choose a direction (H or V)
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);

    if (canPlaceShip(board, shipSize, x, y, direction)) {
      // Place the ship on the board
      if (direction === "H") {
        for (let i = 0; i < shipSize; i++) {
          board[x][y + i] = 1; // Mark the cells with the ship's size
        }
      } else if (direction === "V") {
        for (let i = 0; i < shipSize; i++) {
          board[x + i][y] = 1; // Mark the cells with the ship's size
        }
      }
      placed = true;
    }
  }
}

// Create the context
const GameContext = createContext();

// Custom hook to access the context
export const useGameContext = () => {
  return useContext(GameContext);
};

function countOnes(arr) {
  let count = 0; // Initialize the counter to 0

  // Loop through each row
  for (let i = 0; i < arr.length; i++) {
    // Loop through each column in the row
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++; // Increment the count for each 1 found
      }
    }
  }

  return count; // Return the final count
}

export const GameProvider = ({ children }) => {
  // Initialize the board (10x10) with 0s indicating empty spaces
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );

  // State to track whether cells are clicked (for UI interaction)
  const [cellStates, setCellStates] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );

  // State to track the number of ships sunk
  const [shipsSunk, setShipsSunk] = useState(0);

  // Place ships on the board once the component is mounted
  useEffect(() => {
    const newBoard = [...board]; // Create a copy of the initial board
    SHIP_SIZES.forEach((shipSize) => {
      placeShip(newBoard, shipSize); // Place the ship on the copied board
    });
    setBoard(newBoard); // Update the board state with the newly placed ships
  }, []); // Empty dependency array means this runs only once after the first render

  // Function to handle a cell click, toggle its state, 2==miss, 3==hit
  const handleCellClick = (row, col) => {
    const newCellStates = [...cellStates];
    if (board[row][col] === 0) {
      newCellStates[row][col] = 2; // Mark as miss (empty space clicked)
    } else if (board[row][col] === 1) {
      newCellStates[row][col] = 3; // Mark as hit (ship clicked)
      setShipsSunk((count) => count + 1); // Increment the number of ships sunk
    }
    setCellStates(newCellStates); // Update the cell state
  };

  return (
    <GameContext.Provider
      value={{ board, shipsSunk, cellStates, handleCellClick }}
    >
      {children}
    </GameContext.Provider>
  );
};
