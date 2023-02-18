import React from "react";
import "./button.scss";

const Button = ({ title }) => {
  return (
    <button className="btn__slider_buy" type="button">
      {title}
    </button>
  );
};

export default Button;
