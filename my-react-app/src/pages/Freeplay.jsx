import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import { GameProvider, useGameContext } from "../context/GameContext";
import { Link } from "react-router-dom";

function Freeplay() {
  const { shipsSunk } = useGameContext();
  const [showModal, setShowModal] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  // Effect to open the modal when shipsSunk reaches 17
  useEffect(() => {
    if (shipsSunk === 17) {
      setShowModal(true);
      setTimerRunning(false);
    }
  }, [shipsSunk]);

  // Timer effect
  useEffect(() => {
    if (timerRunning) {
      const timerInterval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1); // Increment the time every second
      }, 1000);

      // Cleanup the interval when the component unmounts or when the timer stops
      return () => clearInterval(timerInterval);
    }
  }, [timerRunning]);

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Freeplay</h1>
        <p>Time Elapsed: {timeElapsed} seconds</p>
        <Board />
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden={!showModal}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Congratulations!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                You have sunk all the ships in {timeElapsed} seconds!
              </div>
              <div className="modal-footer">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeModal}
                  >
                    Home
                  </button>
                </Link>
                <Link to="/game">
                  <button type="button" className="btn btn-primary">
                    Play Again
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function FreeplayPage() {
  return (
    <GameProvider>
      <Freeplay />
    </GameProvider>
  );
}
