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
        <Link to="/game/normal">
          <button type="button" class="btn btn-info">
            Normal
          </button>
        </Link>
        <Link to="/game/freeplay">
          <button type="button" class="btn btn-info">
            Freeplay
          </button>
        </Link>
      </div>
    </>
  );
}

export default Game;
