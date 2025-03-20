import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Freeplay() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Freeplay</h1>
        <p>This is the Freeplay page</p>
      </div>
    </>
  );
}

export default Freeplay;
