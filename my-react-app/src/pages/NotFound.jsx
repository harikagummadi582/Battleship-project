import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button type="button" class="btn btn-primary" onCl>
          Homepage
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
