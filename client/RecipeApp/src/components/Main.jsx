import React from "react";
import image2 from "../static/image-06.png";
import { Link } from "react-router-dom";
import animate from "animate.css"
const Main = () => {
  return (
    <>
      <div className="content">
        <div className="text">
          <div className="Heading-text">Your own chef</div>
          <div className="Heading-para" class="animate__animated animate__bounce animate__faster" >
            Get in touch with the most unique and interesting reciepies from
            people all around the world
          </div>
          <div className="btns">
          <Link  to="/Menu">
            <button className="btn1">
              Explore Menu
            </button>
            </Link>
            <Link  to="/">
            <button className="btn2">
              Saved
            </button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img className="image1" src={image2} height="420px" width="100%" />
        </div>
      </div>
    </>
  );
};

export default Main;
