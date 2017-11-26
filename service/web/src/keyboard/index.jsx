import React from 'react';
import {Key} from './key';
import {mapKeys} from './maps';

export const Keyboard = () => {
  return (
    <div className="keyboard">
      {mapKeys().map(key =>
        <Key
          key={key.id}
          onClick={(key) => console.log(key)}
          {...key}
        />)}
    </div>
  );
}