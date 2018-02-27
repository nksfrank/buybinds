import React from 'react';
import './section.scss';

export const Section = ({ className, children }) => (
  <div className={`section ${className || ''}`}>{children}</div>
);
