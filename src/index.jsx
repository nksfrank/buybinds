import React from 'react';
import ReactDOM from 'react-dom';
import { Keyboard, Key } from './keyboard/index';
import { Bind } from './bind/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binds: [],
      selectedKey: {}
    };

    this.onKeySelect = this.onKeySelect.bind(this);
    this.onKeyBind = this.onKeyBind.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.isBound = this.isBound.bind(this);
  }

  onKeySelect(key) {
    this.setState({
      selectedKey: this.state.selectedKey.id === key.id ? {} : key
    });
  }

  onKeyBind(bind) {
    this.setState({
      binds: [...this.state.binds, { key: this.state.selectedKey.id, bind }],
      selectedKey: undefined
    });
  }

  isSelected({ id }) {
    return this.state.selectedKey.id === id;
  }

  isBound({ id }) {
    return this.state.binds.some(({ key }) => {
      return key === id;
    });
  }

  render() {
    return (
      <div>
        <Keyboard>
          {key => (
            <Key
              key={key.id}
              isSelected={this.isSelected(key)}
              isBound={this.isBound(key)}
              onClick={() => this.onKeySelect(key)}
              {...key}
            />
          )}
        </Keyboard>
        <Bind {...this.state} onKeyBind={this.onKeyBind} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
