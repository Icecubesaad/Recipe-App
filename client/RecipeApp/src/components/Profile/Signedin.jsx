import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../../Functions/RecipeContext';
import { Link } from 'react-router-dom';

const Signedin = () => {
  const context = useContext(RecipeContext);
  const { setSignedInCheck,setname,setImage } = context;
  const [state, setstate] = useState({
    width:"200px"
  });
  useEffect(() => {
    if(window.innerWidth<500){
      setstate({
        width:"100px"
      })
    }
  }, []);
  const signOut = () => {
    localStorage.clear();
    setSignedInCheck(false)
    setname("")
    setImage(null)
  };

  return (
    <Link to="/signin" style={{textDecoration:"none"}}><button className="responsive-btn-hover" onClick={signOut} style={state}>Logout</button></Link>
  );
};

export default Signedin;
