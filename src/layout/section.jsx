import React from 'react';

export const Section = ({ className, children }) => (
  <div className={`section ${className || ''}`}>{children}</div>
);
