import React from 'react';
import { guns } from './guns';

export const Bind = ({ binds, selectedKey, children }) => (
  <div className="binds">
    <div className="bindings">
      <h3>key: {selectedKey.getKey && selectedKey.getKey()}</h3>
    </div>
    {Object.keys(guns).map(type => (
      <div className="bindings" key={type} style={{ gridArea: type }}>
        <h3>{type}</h3>
        <div className="equipment">{guns[type].map(children)}</div>
      </div>
    ))}
  </div>
);
