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
      selectedKey: this.state.selectedKey.id === key.id ? {} : key
    });
  };

  onKeyBind = ({ bind }) => {
    if (
      (this.state.binds[this.state.selectedKey.id] || []).find(
        item => item === bind
      )
    ) {
      this.setState({
        binds: Object.assign({}, this.state.binds, {
          [this.state.selectedKey.id]: this.state.binds[
            this.state.selectedKey.id
          ].filter(item => item !== bind)
        })
      });
      return;
    }
    this.setState({
      binds: Object.assign({}, this.state.binds, {
        [this.state.selectedKey.id]: (
          this.state.binds[this.state.selectedKey.id] || []
        ).concat([bind])
      })
    });
  };

  isSelected = ({ id }) => {
    return this.state.selectedKey && this.state.selectedKey.id === id;
  };

  isBoundKey = ({ id }) => {
    return this.state.binds[id] && this.state.binds[id].length > 0;
  };
  isBoundBind = ({ bind }) => {
    const { binds, selectedKey } = this.state;
    if (!binds || !selectedKey || !bind) return false;
    return (binds[selectedKey.id] || []).some(b => b === bind);
  };

  render() {
    return (
      <div>
        <Keyboard>
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
        <Bind {...this.state}>
          {item => (
            <Key
              {...item}
              key={item.bind}
              isBound={this.isBoundBind(item)}
              onClick={() => this.onKeyBind(item)}
            />
          )}
        </Bind>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
