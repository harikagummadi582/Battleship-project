import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button type="button" className="btn btn-primary" onCl>
          Homepage
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
