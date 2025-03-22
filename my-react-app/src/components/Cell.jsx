import React from "react";

function Cell({ row, col, clicked, onClick }) {
  const handleClick = () => {
    onClick(row, col); // Trigger the onClick handler from context
  };

  // Assign the Bootstrap classes based on the 'clicked' value
  const getButtonClass = () => {
    if (clicked === 0 || clicked === 1) {
      return "btn-info"; // Default or Ship cell
    } else if (clicked === 2) {
      return "btn-danger"; // Miss
    } else if (clicked === 3) {
      return "btn-success"; // Hit
    }
    return ""; // In case of any unexpected value
  };

  return (
    <div className="col">
      <button
        type="button"
        className={`cell btn ${getButtonClass()}`}
        onClick={handleClick}
        disabled={clicked === 2 || clicked === 3}
      ></button>
    </div>
  );
}

export default Cell;
