import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
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
