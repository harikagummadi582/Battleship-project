import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container container-home">
        <h1 className="text-primary">Battleship Game</h1>
        <p className="text-muted">Let's get started!</p>
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
