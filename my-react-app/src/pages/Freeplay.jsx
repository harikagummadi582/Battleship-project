import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import {
  FreeplayProvider,
  useFreeplayContext,
} from "../context/FreeplayContext";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import Modal from "../components/Modal";
function Freeplay() {
  const { shipsSunk } = useFreeplayContext();
  const { timeElapsed } = useFreeplayContext();
  const [showModal, setShowModal] = useState(false);
  const { cellStates, handleCellClick } = useFreeplayContext();
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (shipsSunk === 17) {
      setShowModal(true);
    }
  }, [shipsSunk]);

  const modalTitle = "Congratulations!";
  const modalContent = `You have sunk all the ships in ${timeElapsed} seconds!`;

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ filter: showModal ? "blur(5px)" : "none" }}
      >
        <h1>Freeplay</h1>
        <Timer timeElapsed={timeElapsed} />
        <center>
          <Board cellStates={cellStates} handleCellClick={handleCellClick} />
        </center>
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        title={modalTitle}
        message={modalContent}
      />
    </>
  );
}

export default function FreeplayPage() {
  return (
    <FreeplayProvider>
      <Freeplay />
    </FreeplayProvider>
  );
}
