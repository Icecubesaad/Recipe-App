import React, { useContext, useEffect } from 'react';
import RecipeContext from '../../Functions/RecipeContext';
import { Link } from 'react-router-dom';

const Signedin = () => {
  const context = useContext(RecipeContext);
  const { setSignedInCheck,setname } = context;
  const signOut = () => {
    localStorage.clear();
    setSignedInCheck(false)
    setname("")
  };

  return (
    <Link to="/signin" style={{textDecoration:"none"}}><button className="responsive-btn" onClick={signOut} style={{width:"200px"}}>Logout</button></Link>
  );
};

export default Signedin;
