import React from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import { GameProvider, useGameContext } from "../context/GameContext";

function Freeplay() {
  const { cellStates } = useGameContext();

  // Calculate how many cells are clicked
  const clickedCellsCount = cellStates.flat().filter((clicked) => clicked).length;

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Freeplay</h1>
        <p>Cells clicked: {clickedCellsCount}</p>
        <Board /> {/* Board now has access to context */}
      </div>
    </>
  );
}

// Wrap the entire page with GameProvider to provide context to all components
export default function FreeplayPage() {
  return (
    <GameProvider>
      <Freeplay />
    </GameProvider>
  );
}
