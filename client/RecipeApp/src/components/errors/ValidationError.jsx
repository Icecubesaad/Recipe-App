import React, { useContext } from "react";

const ValidationError = (props) => {
  return (
    <div className="alert alert-warning" role="alert">
      {props.message}
    </div>
  );
};

export default ValidationError;
