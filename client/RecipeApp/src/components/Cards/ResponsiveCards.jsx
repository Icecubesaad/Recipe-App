import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResponsiveCards = (props) => {
const location = useLocation()
  const [style, setstyle] = useState({
    textAlign: "center",
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  });
  return (
    <Link to={`/Menu/${props.Name}`} style={{ textDecoration: "none" }}>
      <div className="wrapper-int">
        <div className="left-wrapper">
          <img
            src={props.Url}
            id="img-card"
            alt="..."
            style={{ height: "120px", width: "150px" }}
          />
        </div>
        <div className="right-wrapper">
        <p className="card-text" style={style}> {props.Name.length < 26 ? props.Name : props.Name.substring(0, 26) + "..."}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResponsiveCards;
