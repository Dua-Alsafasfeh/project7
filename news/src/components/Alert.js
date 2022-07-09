import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h4 className="text mb-0">{alert}</h4>
    </div>
  );
};

export default Alert;