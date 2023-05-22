import React from "react";
import ReactHover from "react-hover";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Signedin from "./Profile/Signedin";
import NotSignedin from "./Profile/NotSignedin";
import { useEffect } from "react";
import { useContext } from "react";
import RecipeContext from "../Functions/RecipeContext";
const Sidebar = () => {
  const context = useContext(RecipeContext)
  const {SignedInCheck,setSignedInCheck,name,get_UserDetails,Image} = context;
  useEffect(() => {
    if(localStorage.getItem('Recipekey')){
      setSignedInCheck(true)
      get_UserDetails()
    }
    else{
      setSignedInCheck(false)
    }
  }, []);
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="profile-pic">
        { Image ? <img src={Image} height="100px" width="100px" style={{border:"rgb(14, 18, 24)",borderRadius:"50%"}} />: <div style={{height:"100px",width:"100px",backgroundColor:"grey", borderRadius:"50%"}}></div>}
        </div>
        <div className="Name" style={{textAlign:"center"}}>{name.toUpperCase()}</div>
      </div>
      <div className="menu">
        <motion.p
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/Menu"><div className="Recipes" >
            <div className="svg">
              <xml version="1.0" encoding="iso-8859-1" />
              <svg
                fill="white"
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.999 511.999"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M324.799,68.799c-103.222,0-187.2,83.978-187.2,187.2s83.978,187.2,187.2,187.2s187.2-83.978,187.2-187.2
                  S428.022,68.799,324.799,68.799z M324.799,407.169c-83.354,0-151.168-67.814-151.168-151.168s67.814-151.17,151.168-151.17
                  s151.168,67.814,151.168,151.168S408.154,407.169,324.799,407.169z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M324.799,148.019c-59.541,0-107.981,48.44-107.981,107.981s48.44,107.981,107.981,107.981S432.78,315.54,432.78,255.999
                  S384.34,148.019,324.799,148.019z M324.799,327.95c-39.673,0-71.949-32.276-71.949-71.949s32.276-71.949,71.949-71.949
                  c39.673,0,71.949,32.276,71.949,71.949S364.472,327.95,324.799,327.95z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M110.491,68.799c-9.95,0-18.016,8.066-18.016,18.016v96.161H81.959V86.815c0-9.95-8.066-18.016-18.016-18.016
                  c-9.95,0-18.016,8.066-18.016,18.016v96.161h-9.896V86.815c0-9.95-8.066-18.016-18.016-18.016S0,76.866,0,86.815v99.764
                  c0,17.881,14.547,32.428,32.428,32.428h12.298v206.175c0,9.95,8.066,18.016,18.016,18.016s18.016-8.066,18.016-18.016V219.009
                  h15.321c17.881,0,32.428-14.547,32.428-32.428V86.815C128.507,76.866,120.441,68.799,110.491,68.799z"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div className="text" style={{textDecoration:"none"}}>Recipes</div>
          </div></Link>
        </motion.p>
        <motion.p
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/saved"><div className="Saved">
            <div className="svg">
              <xml version="1.0" encoding="utf-8" />
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                  stroke="white"
                  strokeWidth="1.5"
                  stokeLinecap="round"
                  stokeLinejoin="round"
                />
                <path
                  d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                  stroke="white"
                  strokeWidth="1.5"
                  stokeLinecap="round"
                  stokeLinejoin="round"
                />
                <path
                  d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                  stroke="white"
                  strokeWidth="1.5"
                  stokeLinecap="round"
                  stokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">Saved</div>
          </div></Link>
        </motion.p>
        <motion.p
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="Profile">
            <div className="svg">
              <xml version="1.0" />
              <svg
                fill="white"
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" />
                <path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" />
              </svg>
            </div>
            <div className="text">Account</div>
          </div>
        </motion.p>
      </div>
      <div className="kuch-aur">
        {SignedInCheck ? <Signedin/> : <NotSignedin/>}
      </div>
    </div>
  );
};

export default Sidebar;
