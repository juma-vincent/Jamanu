import React from "react";
import "./form-input.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} onChange={handleChange} />
      {label ? (
        <label
          className={`${
            otherProps? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
