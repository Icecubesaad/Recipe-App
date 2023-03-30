import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Options = (props) => {
    const {category} = useParams()
     const [style, setstyle] = useState({
    textAlign: "center",
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  });
    return (
        <Link to={`/Menu/${category}/${props.Name}/${props.Unique}`} style={{textDecoration:"none",backgroundColor:"rgb(34, 42, 61)"}}>
              <div className="wrapper-int"  style={{height:"65px",backgroundColor:"rgb(34, 42, 61)",width:"100%",borderRadius:"0px"}}>
                <div className="left-wrapper">
                  <img
                    src={props.Url}
                    id="img-card"
                    alt="..."
                    style={{ height: "50px", width: "50px" }}
                  />
                </div>
                <div className="right-wrapper">
                <p className="card-text" style={style}> {props.Name.length < 26 ? props.Name : props.Name.substring(0, 26) + "..."}</p>
                </div>
              </div>
            </Link>
    );
}
export default Options;
