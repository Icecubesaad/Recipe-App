import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <div className="card" style={{ width: "19rem" }}>
      <Link to={`/Menu/${props.Name}`}>
        <img
          src={props.Url}
          class="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto" }}
        />
      
      <div className="card-body">
        <p className="card-text" style={{textAlign:"center"}}>{props.Name}</p>
      </div>
      </Link>
    </div>
  );
};

export default Cards;
