import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { NormalProvider, useNormalContext } from "../context/NormalContext";
import Board from "../components/Board";
import Modal from "../components/Modal";
import Timer from "../components/Timer";

function Normal() {
  const [showModal, setShowModal] = useState(false);
  const { myBoard, handleMyBoardClick, myShipRandom, myBoardUI } =
    useNormalContext();
  const { opBoardUI, handleOpBoardClick, myShipsSunk, opShipsSunk } =
    useNormalContext();
  const [buildShipModal, setShipModal] = useState(true);
  const closeBuildShipModal = () => {
    setShipModal(false);
  };
  const { timeElapsed } = useNormalContext();
  let modalTitle = "Congratulations!";
  let modalContent = `You have sunk all the ships in ${timeElapsed} seconds!`;

  // useEffect(() => {
  //   if (opShipsSunk === 17) {
  //     setShowModal(true);
  //   }
  //  }, [opShipsSunk]);

  //  useEffect(() => {
  //   if (myShipsSunk === 17) {
  //     modalTitle = "Game Over!";
  //     modalContent = `You have lost the game in ${timeElapsed} seconds!`;
  //     setShowModal(true);
  //   }
  //  }, [myShipsSunk]);

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ filter: buildShipModal ? "blur(5px)" : "none" }}
      >
        <Timer timeElapsed={timeElapsed} />
        <h1>Normal</h1>
        <h2>Opponent Board - Ships sunk:{opShipsSunk}</h2>
        <Board cellStates={opBoardUI} handleCellClick={handleOpBoardClick} />
        <h2>My Board - Ships Sunk:{myShipsSunk}</h2>
        <Board cellStates={myBoardUI} handleCellClick={handleMyBoardClick} />
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeBuildShipModal}
        title="Game Over!"
        message={`You have lost the game in ${timeElapsed} seconds!`}
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Build your ship!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeBuildShipModal}
              ></button>
            </div>
            <div className="modal-body">
              <Board
                cellStates={myBoard}
                handleCellClick={handleMyBoardClick}
              />
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
