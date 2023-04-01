import React from "react";
import { Link, useParams } from "react-router-dom";
const DishesCardUser = (props) => {
  return (
    <div className="card" style={{ width: "15rem" ,borderRadius:"20px", height:"18rem",backgroundColor:"rgb(14, 18, 24)",color:"white",border:"2px solid rgb(14, 18, 24)"}}>
      <Link to={`/saved/Menu/${props.Category}/${props.Name}/${props.Unique}`}>
        <img
          src={props.Url}
          class="card-img-top"
          id="img-card"
          alt="..."
          style={{ height: "auto",border:"transparent",borderRadius:"20px" }}
        />
      
      <div className="card-body">
        <p className="card-text" style={{color:"white"}}> {props.Name.length < 26 ? props.Name : props.Name.substring(0, 26) + "..."}</p>
      </div>
      </Link>
    </div>
  );
};

export default DishesCardUser;
