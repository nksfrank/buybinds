import React, {useRef} from "react";

const isDisabled = (binds) =>
  !Object.keys(binds).some((key) => binds[key].length > 0);
const toString = (binds) =>
  Object.keys(binds)
    .filter((key) => binds[key].length > 0)
    .map(
      (key) =>
        `bind "${key}" "${binds[key]
          .map((item) => " buy " + item)
          .join(";")
          .trim()}"`
    )
    .join("\r\n");
export const Bindings = ({ binds, selectedKey }) => {
  const textArea = useRef(null);

  function copyToClipboard() {
    textArea.current.select();
    try {
      document.execCommand("copy");
      if (document.selection) {
        document.selection.empty();
      } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
      console.log("unable to copy");
    }
  };

  return (
    <div className="bindings">
      <div className="header">
        <h3>bindings {selectedKey.getKey && selectedKey.getKey()}</h3>
        <button
          className={`key ${isDisabled(binds) ? "disabled" : ""}`}
          onClick={copyToClipboard}
          disabled={isDisabled(binds)}
        >
          Copy
        </button>
      </div>
      <textarea readOnly value={toString(binds)} ref={textArea} />
    </div>
  );
};
