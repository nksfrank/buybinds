import React from 'react';
import { mapKeys } from './maps';
export * from './key';

export const Keyboard = ({ children }) => (
  <div className="section keyboard">{mapKeys().map(children)}</div>
);
