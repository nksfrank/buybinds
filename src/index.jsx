import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Keyboard, Key } from "./keyboard/index";
import { Bind } from "./bind/index";
import { Section, Header, Footer } from "./layout/index";
import "./global.css";

const App = () => {
  const [binds, setBinds] = useState({});
  const [selectedKey, setSelectedKey] = useState({});

  const onKeySelect = (key) => {
    setSelectedKey(
      selectedKey.getKey && selectedKey.getKey() === key.getKey() ? {} : key
    );
  };

  const onKeyBind = ({ bind }) => {
    if ((binds[selectedKey.getKey()] || []).find((item) => item === bind)) {
      setBinds(
        Object.assign({}, binds, {
          [selectedKey.getKey()]: binds[selectedKey.getKey()].filter(
            (item) => item !== bind
          ),
        })
      );
      return;
    }
    setBinds(
      Object.assign({}, binds, {
        [selectedKey.getKey()]: (binds[selectedKey.getKey()] || []).concat([
          bind,
        ]),
      })
    );
  };

  const isSelected = ({ getKey }) =>
    selectedKey.getKey && selectedKey.getKey() === getKey();

  const isBoundKey = ({ getKey }) =>
    binds[getKey()] && binds[getKey()].length > 0;

  const isBoundBind = ({ bind }) => {
    if (!binds || !selectedKey || !bind) return false;
    return ((selectedKey.getKey && binds[selectedKey.getKey()]) || []).some(
      (b) => b === bind
    );
  };
  return (
    <div className="main">
      <Header />
      <Section className="white">
        <Keyboard key="keyboard">
          {(key) => (
            <Key
              {...key}
              key={key.id}
              isSelected={isSelected(key)}
              isBound={isBoundKey(key)}
              onClick={() => onKeySelect(key)}
            />
          )}
        </Keyboard>
      </Section>
      <Section className="blue">
        <Bind key="binds" {...{ binds, selectedKey }}>
          {(item) => (
            <Key
              {...item}
              key={item.bind}
              isBound={isBoundBind(item)}
              onClick={() => onKeyBind(item)}
              disabled={!selectedKey.id}
              appearance="secondary"
              className="invert"
            />
          )}
        </Bind>
      </Section>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
