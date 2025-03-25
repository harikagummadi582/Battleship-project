import React from "react";

const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button className="btn btn-danger reset" onClick={handleRefresh}>
      Reset
    </button>
  );
};

export default RefreshButton;
