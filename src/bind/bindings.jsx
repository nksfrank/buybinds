import React from 'react';

const isDisabled = binds =>
  !Object.keys(binds).some(key => binds[key].length > 0);
const toString = binds => {
  return Object.keys(binds)
    .filter(key => binds[key].length > 0)
    .map(
      key =>
        `bind "${key}" "${binds[key]
          .map(item => ' buy ' + item)
          .join(';')
          .trim()}"`
    )
    .join('\r\n');
};
export const Bindings = ({ binds, selectedKey }) => (
  <div className="bindings">
    <div className="header">
      <h3>bindings {selectedKey.getKey && selectedKey.getKey()}</h3>
      <button
        className={`key ${isDisabled(binds) ? 'disabled' : ''}`}
        disabled={isDisabled(binds)}
      >
        Copy
      </button>
    </div>
    <textarea value={toString(binds)} />
  </div>
);
