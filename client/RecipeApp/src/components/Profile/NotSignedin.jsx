import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const NotSignedin = () => {
  const [state, setstate] = useState({
    width:"200px"
  });
  useEffect(() => {
    if(window.innerWidth<500){
      setstate({
        width:"80px",
        marginLeft:"20px"
      })
    }
  }, []);
  return (
    <>
      <Link to="/signin">
      <button className="responsive-btn" style={state}>Sign in</button>
      
      </Link>
      <Link to="/signup">
      <button className="responsive-btn" style={state}>Sign up</button>
      </Link>
    </>
  );
};

export default NotSignedin;
