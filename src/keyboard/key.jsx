import React from 'react';

export const Key = ({
  id,
  value,
  grid,
  disabled,
  isBound,
  isSelected,
  getKey,
  onClick
}) => (
  <button
    className={`key ${id}${disabled ? ' disabled': ''}${isBound ? ' bound' : ''}${isSelected ? ' selected': ''}`}
    onClick={() => !disabled && onClick()}
    style={{'gridArea': grid}}
  >
    {value}
  </button>
);
