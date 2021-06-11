import { Keyboard, Key } from './keyboard/index';
import { Bind } from './bind/index';
import { Section, Header, Footer } from './layout/index';

export const App = () => {
  const [binds, setBinds] = React.useState({});
  const [selectedKey, setSelectedKey] = React.useState({});

  const onKeySelect = (key) => {
    setSelectedKey(selectedKey.getKey && selectedKey.getKey() === key.getKey() ? {} : key);
  };

  const onKeyBind = ({ bind }) => {
    if ((binds[selectedKey.getKey()] || []).find((item) => item === bind)) {
      setBinds(
        Object.assign({}, binds, {
          [selectedKey.getKey()]: binds[selectedKey.getKey()].filter((item) => item !== bind),
        })
      );
      return;
    }
    setBinds(
      Object.assign({}, binds, {
        [selectedKey.getKey()]: (binds[selectedKey.getKey()] || []).concat([bind]),
      })
    );
  };

  const isSelected = ({ getKey }) => selectedKey.getKey && selectedKey.getKey() === getKey();

  const isBoundKey = ({ getKey }) => binds[getKey()] && binds[getKey()].length > 0;

  const isBoundBind = ({ bind }) => {
    if (!binds || !selectedKey || !bind) return false;
    return ((selectedKey.getKey && binds[selectedKey.getKey()]) || []).some((b) => b === bind);
  };
  return (
    <>
      <Header />
      <Section className="blue text-center">
        <div>
          <h2>Buy time is short</h2>
          <p>
            And using the allotted time at the start of the round to it&#39;s full potential is
            crucial, setting up tactics for the round ahead of you. Having your favorite outfits at
            just the press of a button gives you that extra mobility
          </p>
        </div>
      </Section>
      <div className="sm-show flex middle h100 white text-center">
        <h3>The screen you&#39;re using is to small for this application to work properly</h3>
      </div>
      <Section className="sm-hide white">
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
      <Section className="sm-hide blue">
        <Bind key="binds" {...{ binds, selectedKey }}>
          {(item) => (
            <Key
              {...item}
              key={item.bind}
              isBound={isBoundBind(item)}
              onClick={() => onKeyBind(item)}
              disabled={!selectedKey.id}
            />
          )}
        </Bind>
      </Section>
      <Footer />
    </>
  );
};
