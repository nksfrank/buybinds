import React from 'react';
import ReactDOM from 'react-dom';
import { Keyboard, Key } from './keyboard/index';
import { Bind } from './bind/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binds: {},
      selectedKey: {}
    };
  }

  onKeySelect = key => {
    this.setState({
      selectedKey:
        this.state.selectedKey.getKey &&
        this.state.selectedKey.getKey() === key.getKey()
          ? {}
          : key
    });
  };

  onKeyBind = ({ bind }) => {
    if (
      (this.state.binds[this.state.selectedKey.getKey()] || []).find(
        item => item === bind
      )
    ) {
      this.setState({
        binds: Object.assign({}, this.state.binds, {
          [this.state.selectedKey.getKey()]: this.state.binds[
            this.state.selectedKey.getKey()
          ].filter(item => item !== bind)
        })
      });
      return;
    }
    this.setState({
      binds: Object.assign({}, this.state.binds, {
        [this.state.selectedKey.getKey()]: (
          this.state.binds[this.state.selectedKey.getKey()] || []
        ).concat([bind])
      })
    });
  };

  isSelected = ({ getKey }) =>
    this.state.selectedKey.getKey &&
    this.state.selectedKey.getKey() === getKey();

  isBoundKey = ({ getKey }) =>
    this.state.binds[getKey()] && this.state.binds[getKey()].length > 0;

  isBoundBind = ({ bind }) => {
    const { binds, selectedKey } = this.state;
    if (!binds || !selectedKey || !bind) return false;
    return ((selectedKey.getKey && binds[selectedKey.getKey()]) || []).some(
      b => b === bind
    );
  };

  render() {
    return (
      <div className="main">
        <div className="section white">
          <Keyboard key="keyboard">
            {key => (
              <Key
                {...key}
                key={key.id}
                isSelected={this.isSelected(key)}
                isBound={this.isBoundKey(key)}
                onClick={() => this.onKeySelect(key)}
              />
            )}
          </Keyboard>
        </div>
        <div className="section blue">
          <Bind key="binds" {...this.state}>
            {item => (
              <Key
                {...item}
                key={item.bind}
                isBound={this.isBoundBind(item)}
                onClick={() => this.onKeyBind(item)}
                disabled={!this.state.selectedKey.id}
              />
            )}
          </Bind>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
