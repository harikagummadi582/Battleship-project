import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Board from "../components/Board";

function Game() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="container game-container">
        <h1>Types of Games</h1>
        <p>Choose a game type to play!</p>
        <div className="button-container">
        <Link to="/game/normal">
          <button type="button" className="btn btn-info game-btn" onClick={openModal}>
            Normal
          </button>
        </Link>
        <Link to="/game/freeplay">
          <button type="button" className="btn btn-info game-btn">
            Freeplay
          </button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Game;
