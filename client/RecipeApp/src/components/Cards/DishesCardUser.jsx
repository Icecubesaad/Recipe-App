import React from "react";
import { Link, useParams } from "react-router-dom";
const DishesCardUser = (props) => {
  return (
    <div className="card" style={{ width: "19rem" }}>
      <Link to={`/Menu/${props.Category}/${props.Name}/${props.Unique}`}>
        <img
          src={props.Url}
          class="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto" }}
        />
      
      <div className="card-body">
        <p className="card-text">{props.Name}</p>
      </div>
      </Link>
    </div>
  );
};

export default DishesCardUser;
