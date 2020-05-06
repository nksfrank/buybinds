import React from 'react';

let txtArea;
const refTextArea = ref => {
  txtArea = ref;
};
const copyToClipboard = () => {
  txtArea.select();
  try {
    document.execCommand('copy');
    if (document.selection) {
      document.selection.empty();
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
  } catch (err) {
    console.log('unable to copy');
  }
};
const isDisabled = binds =>
  !Object.keys(binds)
  .some(key => binds[key].length > 0);
const toString = binds => Object.keys(binds)
    .filter(key => binds[key].length > 0)
    .map(
      key =>
        `bind "${key}" "${binds[key]
          .map(item => ' buy ' + item)
          .join(';')
          .trim()}"`
    )
    .join('\r\n');
export const Bindings = ({ binds, selectedKey }) => (
  <div className="bindings">
    <div className="header">
      <h3>bindings {selectedKey.getKey && selectedKey.getKey()}</h3>
      <button
        className={`key ${isDisabled(binds) ? 'disabled' : ''}`}
        onClick={copyToClipboard}
        disabled={isDisabled(binds)}
      >
        Copy
      </button>
    </div>
    <textarea readOnly value={toString(binds)} ref={refTextArea} />
  </div>
);
