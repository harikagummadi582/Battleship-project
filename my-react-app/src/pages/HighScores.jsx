import React from "react";
import Navbar from "../components/Navbar";
import "../App.css"; // Import the CSS file for Highscore page

function Highscore() {
  // Extended list of high scores with 5 more players
  const highScores = [
    { name: "Alice", score: 100 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 70 },
    { name: "David", score: 120 },
    { name: "Eva", score: 95 },
    { name: "Frank", score: 110 },
    { name: "Grace", score: 80 },
    { name: "Hannah", score: 130 },
    { name: "Ian", score: 60 },
    { name: "Jack", score: 75 },
  ];

  // Sort high scores in descending order based on score
  const sortedScores = highScores.sort((a, b) => b.score - a.score);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>HighScores</h1>
        <p>These are the top scores</p>
        <table className="highscore-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Highscore;
