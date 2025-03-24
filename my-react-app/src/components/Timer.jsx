import react, { useState, useEffect } from "react";
import { useFreeplayContext } from "../context/FreeplayContext";

function Timer({ timeElapsed }) {
  // const {timeElapsed, setTimeElapsed} = useFreeplayContext();
  // const {timerRunning, setTimerRunning} = useFreeplayContext();
  // const { shipsSunk } = useFreeplayContext();

  // useEffect(() => {
  //   if (timerRunning) {
  //     const timerInterval = setInterval(() => {
  //       setTimeElapsed((prevTime) => prevTime + 1); // Increment the time every second
  //     }, 1000);

  //     // Cleanup the interval when the component unmounts or when the timer stops
  //     return () => clearInterval(timerInterval);
  //   }
  // }, [timerRunning]);

  // // Effect to open the modal when shipsSunk reaches 17
  // useEffect(() => {
  //   if (shipsSunk === 17) {
  //     // setShowModal(true);
  //     setTimerRunning(false);
  //   }
  // }, [shipsSunk]);

  return <p>Time Elapsed: {timeElapsed} seconds</p>;
}

export default Timer;
