import React, { useContext } from "react";

const ValidationError = (props) => {
  return (
    <div class="alert alert-warning" role="alert">
      {props.message}
    </div>
  );
};

export default ValidationError;
