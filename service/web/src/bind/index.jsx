import React from 'react';
import {guns} from './guns';

export const Bind = ({
  selectedKey,
  onKeyBind
}) => (
  <div>
    Bind
    <div>{selectedKey.getKey && selectedKey.getKey()}</div>
    <div>
      {guns.rifle.map(({value, bind}) =>
        <button key={bind} onClick={() => onKeyBind(bind)}>{value}</button>
      )}
    </div>
  </div>
);