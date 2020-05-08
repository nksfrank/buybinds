import React from "react";
import "./section.css";

export const Section = ({ className, children }) => (
  <div className={`section ${className || ""}`}>{children}</div>
);
