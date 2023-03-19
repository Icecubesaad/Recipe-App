import React from "react";
import { Link } from "react-router-dom";
const NotSignedin = () => {
  return (
    <>
      <Link to="/signin">
        <button className="btn-nav">Sign in</button>
      </Link>
      <Link to="/signup">
        <button className="btn-nav">Sign up</button>
      </Link>
    </>
  );
};

export default NotSignedin;
