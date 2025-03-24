import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Rules() {
  return (
    <>
      <Navbar />
      <div className="container rules-container">
        <h1 className="rules-title">Rules</h1>

        <p className="rules-text">
          These are the rules for playing Battleship:
        </p>

        <div className="rules-section">
          <h2>1. Homepage</h2>
          <ul>
            <li>
              When you start the game, you will be directed to the homepage.
            </li>
            <li>
              Press the <strong>"Start Game"</strong> button to begin the game.
            </li>
          </ul>
        </div>

        <div className="rules-section">
          <h2>2. Game Types</h2>
          <ul>
            <li>
              <strong>Normal Game:</strong> You place your ships randomly and
              then take turns with the AI to attack each other's ships.
            </li>
            <li>
              <strong>Freeplay Game:</strong> You only see the opponent’s board
              and take turns attacking them with a timer displayed for each
              turn.
            </li>
          </ul>
        </div>

        <div className="rules-section">
          <h2>3. Normal Game Rules</h2>
          <ul>
            <li>
              Click the <strong>"Normal Game"</strong> button to start.
            </li>
            <li>
              A popup screen allows you to place your ships randomly using the{" "}
              <strong>"Random"</strong> button.
            </li>
            <li>
              After placing the ships, click <strong>"Continue"</strong> to
              begin the game.
            </li>
            <li>
              You and the AI take turns attacking each other. The player always
              goes first.
            </li>
            <li>
              When you click on a square, it shows whether you hit or missed the
              opponent’s ship.
            </li>
            <li>If you hit a ship, it will be marked on the board.</li>
            <li>
              The game ends when one player sinks all the opponent's ships.
            </li>
            <li>
              The winner will be displayed at the top: “Game Over! Player or AI
              Won!”
            </li>
          </ul>
        </div>

        <div className="rules-section">
          <h2>4. Freeplay Game Rules</h2>
          <ul>
            <li>
              In <strong>"Freeplay Game"</strong>, you only see the opponent's
              board.
            </li>
            <li>
              You take turns attacking the opponent by clicking on the squares
              on the board.
            </li>
            <li>The time elapsed for each turn is displayed in seconds.</li>
            <li>
              There is no ship placement or setup – just attacking the opponent.
            </li>
          </ul>
        </div>

        <div className="rules-section">
          <h2>5. Reset Button</h2>
          <ul>
            <li>
              At any time during the game, you can click the{" "}
              <strong>"Reset"</strong> button to start a new game.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Rules;
