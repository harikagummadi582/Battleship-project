import react, { useState, useEffect } from "react";
import { useFreeplayContext } from "../context/FreeplayContext";

function Timer({ timeElapsed }) {

  return <p>Time Elapsed: {timeElapsed} seconds</p>;
}

export default Timer;
