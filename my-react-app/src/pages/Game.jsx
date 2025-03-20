import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Game() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Game</h1>
        <p>This is the game page</p>
        <button type="button" class="btn btn-info">
          <Link to="/game/normal">Normal</Link>
        </button>
        <button type="button" class="btn btn-info">
          <Link to="/game/freeplay">Freeplay</Link>
        </button>
      </div>
    </>
  );
}

export default Game;
