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
        <button type="button" class="btn btn-info">
          <Link to="/game">Start Game</Link>
        </button>
      </div>
    </>
  );
}

export default App;
