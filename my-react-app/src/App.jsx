import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <h1>Homepage</h1>
        <p>This is the homepage</p>
      </div>
    </>
  );
}

export default App;
