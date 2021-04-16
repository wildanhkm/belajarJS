import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-container">
      <p className="label">{label}</p>
      <input className="form-input" {...rest} />
    </div>
  );
};

export default Input;
