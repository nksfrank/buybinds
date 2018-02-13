import React from 'react';
import { guns } from './guns';

export const Bind = ({ binds, selectedKey, children }) => (
  <div>
    <h2>Bind</h2>
    <div>key: {selectedKey.getKey && selectedKey.getKey()}</div>
    {Object.keys(guns).map(type => (
      <div key={type}>
        <h3>{type}</h3>
        {guns[type].map(children)}
      </div>
    ))}
  </div>
);
