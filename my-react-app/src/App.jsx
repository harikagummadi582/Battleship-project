import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Cell from "./components/Cell";
import Board from "./components/Board";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Homepage</h1>
        <p>This is the homepage</p>
        <Link to="/game">
          <button type="button" className="btn btn-info">
            Start Game
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
