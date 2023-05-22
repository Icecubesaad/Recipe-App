import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Cards = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="card" style={{ width: "17rem" ,borderRadius:"20px", height:"14rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
      <Link to={`/Menu/${props.Name}`}>
        <img
          src={props.Url}
          className="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto",border:"transparent",borderRadius:"20px" }}
        />
      
      <div className="card-body">
        <p className="card-text" style={{textAlign:"center",color:"white"}}>{props.Name}</p>
      </div>
      </Link>
    </div>
  );
};

export default Cards;
