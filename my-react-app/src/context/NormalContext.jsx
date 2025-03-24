import React, { createContext, useState, useContext, useEffect } from "react";

const BOARD_SIZE = 10; // Size of the board
const SHIP_SIZES = [5, 4, 3, 3, 2]; // Ship sizes

const NormalContext = createContext();

function AIgame(board) {
  let row = 0,
    col = 0;
  const pick = Math.random() < 0 ? 0 : 2;
  while (true) {
    row = Math.floor(Math.random() * BOARD_SIZE);
    col = Math.floor(Math.random() * BOARD_SIZE);
    if (board[row][col] === pick) {
      return { row: row, col: col };
    }
  }
}

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
function placeShip(board, shipSize, val = 1) {
  let placed = false;
  while (!placed) {
    const direction = Math.random() < 0.5 ? "H" : "V"; // Randomly choose a direction (H or V)
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);

    if (canPlaceShip(board, shipSize, x, y, direction)) {
      // Place the ship on the board
      if (direction === "H") {
        for (let i = 0; i < shipSize; i++) {
          board[x][y + i] = val; // Mark the cells with the ship's size
        }
      } else if (direction === "V") {
        for (let i = 0; i < shipSize; i++) {
          board[x + i][y] = val; // Mark the cells with the ship's size
        }
      }
      placed = true;
    }
  }
}

function randomShipPlacement(board, setBoard, val = 1) {
  const newBoard = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(0)
  ); // Create a copy of the initial board
  SHIP_SIZES.forEach((shipSize) => {
    placeShip(newBoard, shipSize, val); // Place the ship on the copied board
  });
  setBoard(newBoard);
}

export const useNormalContext = () => {
  return useContext(NormalContext);
};

export const NormalProvider = ({ children }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [myShipsSunk, setMyShipsSunk] = useState(0);
  const [opShipsSunk, setOpShipsSunk] = useState(0);

  useEffect(() => {
    if (timerRunning) {
      const timerInterval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1); // Increment the time every second
      }, 1000);

      // Cleanup the interval when the component unmounts or when the timer stops
      return () => clearInterval(timerInterval);
    }
  }, [timerRunning]);

  //My ship
  const [myBoard, setMyBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );
  const [myBoardUI, setMyBoardUI] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );

  //Opponenet ships
  const [opBoard, setOpBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );
  const [opBoardUI, setOpBoardUI] = useState(
    Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0))
  );

  useEffect(() => {
    randomShipPlacement(opBoard, setOpBoard);
  }, []);

  useEffect(() => {
    console.log("OpBoard", opBoard);
  }, [opBoard]);

  useEffect(() => {
    console.log("MyBoard", myBoard);
  }, [myBoard]);

  const myShipRandom = () => {
    randomShipPlacement(myBoard, setMyBoard, 2);
  };

  const handleMyBoardClick = (r, c) => {};

  const handleOpBoardClick = (row, col) => {
    const newCellStates = [...opBoardUI];
    if (opBoard[row][col] === 0) {
      newCellStates[row][col] = 2; // Mark as miss (empty space clicked)
    } else if (opBoard[row][col] === 1) {
      newCellStates[row][col] = 3; // Mark as hit (ship clicked)
      setOpShipsSunk((count) => count + 1);
    }
    setOpBoardUI(newCellStates);

    setTimeout(() => {
      const newCellStates = [...myBoardUI];
      if (myShipsSunk < 17) {
        const { row, col } = AIgame(myBoard);
        if (myBoard[row][col] === 0) {
          newCellStates[row][col] = 2; // Mark as miss (empty space clicked)
        } else if (myBoard[row][col] === 2) {
          newCellStates[row][col] = 3; // Mark as hit (ship clicked)
          setMyShipsSunk((count) => count + 1);
        }
        myBoard[row][col] = 5;
        setMyBoard(myBoard);
        setMyBoardUI(newCellStates);
      }
    }, 500); // Update the cell state
  };

  useEffect(() => {
    if (opShipsSunk === 17 || myShipsSunk === 17) {
      setTimerRunning(false); // Stops the timer if either player's ships are sunk
    }
  }, [myShipsSunk, opShipsSunk]);

  return (
    <NormalContext.Provider
      value={{
        myBoard,
        handleMyBoardClick,
        timeElapsed,
        myShipRandom,
        myBoardUI,
        opBoardUI,
        handleOpBoardClick,
        myShipsSunk,
        opShipsSunk,
      }}
    >
      {children}
    </NormalContext.Provider>
  );
};
