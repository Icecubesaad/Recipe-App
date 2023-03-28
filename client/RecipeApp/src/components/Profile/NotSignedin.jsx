import React from "react";
import { Link } from "react-router-dom";
const NotSignedin = () => {
  return (
    <>
      <Link to="/signin">
      <button className="responsive-btn" style={{width:"200px"}}>Sign in</button>
      
      </Link>
      <Link to="/signup">
      <button className="responsive-btn" style={{width:"200px"}}>Sign up</button>
      </Link>
    </>
  );
};

export default NotSignedin;
