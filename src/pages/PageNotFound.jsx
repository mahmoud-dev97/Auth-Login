import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pagenotfound flex-style">
      <div>
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <Link className="other-links" to="/home">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
