import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => {
  return (
    <div
      className={` ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomButton;
