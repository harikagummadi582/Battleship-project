import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { NormalProvider, useNormalContext } from "../context/NormalContext";
import Board from "../components/Board";
import Modal from "../components/Modal";
import Timer from "../components/Timer";

function Normal() {
  const { showModal, closeModal, modalTitle, modalContent, startTimer } =
    useNormalContext();
  const { myBoard, handleMyBoardClick, myShipRandom, myBoardUI } =
    useNormalContext();
  const { opBoardUI, handleOpBoardClick, myShipsSunk, opShipsSunk } =
    useNormalContext();
  const [buildShipModal, setShipModal] = useState(true);
  const closeBuildShipModal = () => {
    setShipModal(false);
    startTimer();
  };
  const { timeElapsed } = useNormalContext();

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ filter: buildShipModal || showModal ? "blur(5px)" : "none" }}
      >
        <Timer timeElapsed={timeElapsed} />
        <h1>Normal</h1>
        <h2>Opponent Board </h2>
        <Board cellStates={opBoardUI} handleCellClick={handleOpBoardClick} />
        <h2>My Board </h2>
        <Board cellStates={myBoardUI} handleCellClick={handleMyBoardClick} />
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        title={modalTitle}
        message={modalContent}
      />
      <div
        className={`modal fade ${buildShipModal ? "show" : ""}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!buildShipModal}
        style={{ display: buildShipModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Build your ship!
              </h5>
            </div>
            <div className="modal-body">
              <center>
                <Board
                  cellStates={myBoard}
                  handleCellClick={handleMyBoardClick}
                />
              </center>
            </div>
            <button className="btn btn-danger" onClick={myShipRandom}>
              Random
            </button>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeBuildShipModal}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function NormalFunction() {
  return (
    <NormalProvider>
      <Normal />
    </NormalProvider>
  );
}
