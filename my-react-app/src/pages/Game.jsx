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
      <div className="container">
        <h1>Game</h1>
        <p>This is the game page</p>
        <Link to="/game/normal">
          <button type="button" className="btn btn-info" onClick={openModal}>
            Normal
          </button>
        </Link>
        <Link to="/game/freeplay">
          <button type="button" className="btn btn-info">
            Freeplay
          </button>
        </Link>
      </div>
    </>
  );
}

export default Game;
