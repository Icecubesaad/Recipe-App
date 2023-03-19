import React, { useContext, useEffect } from 'react';
import RecipeContext from '../../Functions/RecipeContext';
import { Link } from 'react-router-dom';

const Signedin = () => {
  const context = useContext(RecipeContext);
  const { get_UserDetails, name, setname , setSignedInCheck } = context;
    console.log(name)
  const signOut = () => {
    localStorage.clear();
    setname("");
    setSignedInCheck(false)
  };

  useEffect(() => {
    get_UserDetails();
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <div className='profile'>
      <div className='logo'></div>
      <div className='Name'>{name}</div>
      <div>
        <Link to='/signin'>
          <button className='btn-nav' onClick={signOut}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signedin;
