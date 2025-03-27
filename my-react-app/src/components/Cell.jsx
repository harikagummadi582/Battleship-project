import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
function Cell({ row, col, clicked, onClick, getButtonClass }) {
  const handleClick = () => {
    onClick(row, col); 
  };

  return (
    <div>
      <button
        type="button"
        className={`cell btn ${getButtonClass(clicked)}`}
        onClick={handleClick}
        disabled={clicked !== 0}
      >
        <span className="button-text">
          {clicked === 0 ? (
            ""
          ) : clicked === 1 ? (
            <CloseIcon style={{ fontSize: 15, color: "white" }} />
          ) : (
            <CircleIcon style={{ fontSize: 10, color: "white" }} />
          )}
        </span>
      </button>
    </div>
  );
}

export default Cell;
