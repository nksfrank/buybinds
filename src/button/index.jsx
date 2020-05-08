import React from "react";
import "./styles.css";

const classNames = (...args) => args.filter((a) => a).join(" ");
export const Button = ({
  className,
  disabled,
  appearance = "primary",
  selected,
  children,
  ...props
}) => (
  <button
    className={`${className || ""} ${disabled ? " disabled" : ""} ${
      appearance || ""
    } ${selected ? " selected" : ""}`}
    {...props}
  >
    {children}
  </button>
);
