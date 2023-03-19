import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../Functions/RecipeContext";
import NotSignedin from "./Profile/NotSignedin";
import Signedin from "./Profile/Signedin";
const Navbar = () => {
  const context = useContext(RecipeContext)
  const {SignedInCheck,setSignedInCheck} = context;
  useEffect(() => {
    if(localStorage.getItem('key')){
      setSignedInCheck(true)
    }
    else{
      setSignedInCheck(false)
    }
  }, []);
  return (
    <div className="Navbar">
      <div className="logo">Icecube</div>
      <div className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Recipies</Link>
          </li>
          <li>
            <Link to="/Saved">Saved</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="buttons-nav">
       {SignedInCheck ? <Signedin/> : <NotSignedin/>}
      </div>
    </div>
  );
};

export default Navbar;
