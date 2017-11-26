import React from 'react';

export const Key = ({
  id,
  value,
  disabled,
  isBound,
  onClick
}) => (
  <button
    className={`key ${id}${disabled ? ' disabled': ''}${isBound ? ' bound' : ''}`}
    onClick={() => !disabled && onClick(id)}
    style={{'gridArea': id}}
  >
    {value}
  </button>
);
