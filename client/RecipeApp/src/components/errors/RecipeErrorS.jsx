import React from "react";

const RecipeErrorS = (props) => {
  return (
    <div>
      <div className="alert alert-warning" role="alert" style={{position:"sticky",width:"60%",margin:"auto",maxHeight:"150px"}}>
        {props.Error}
      </div>
    </div>
  );
};

export default RecipeErrorS;
