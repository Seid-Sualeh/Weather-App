import React from "react";
import "./button.css";

const Button = ({
  children,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
