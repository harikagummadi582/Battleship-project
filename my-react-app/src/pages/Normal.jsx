import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Normal() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Normal</h1>
        <p>This is the Normal page</p>
      </div>
    </>
  );
}

export default Normal;
