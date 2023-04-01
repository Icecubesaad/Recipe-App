import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ResponsiveDishesCard = (props) => {
    const {category} = useParams()
     const [style, setstyle] = useState({
    textAlign: "center",
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  });
    return (
        <Link to={`/Menu/${category}/${props.Name}/${props.Unique}`} style={{textDecoration:"none"}}>
              <div className="wrapper-int">
                <div className="left-wrapper">
                  <img
                    src={props.Url}
                    id="img-card"
                    alt="..."
                    style={{ height: "120px", width: "150px",border:"transparent",borderRadius:"20px" }}
                  />
                </div>
                <div className="right-wrapper">
                <p className="card-text" style={style}> {props.Name.length < 26 ? props.Name : props.Name.substring(0, 26) + "..."}</p>
                </div>
              </div>
            </Link>
    );
}

export default ResponsiveDishesCard;
