import React from 'react';
import ReactDOM from 'react-dom';
import {Keyboard} from './keyboard/index';
import {Bind} from './bind/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binds: [],
      selectedKey: {},
      // selectedKeys: []
    }

    this.onKeySelect = this.onKeySelect.bind(this);
    this.onKeyBind = this.onKeyBind.bind(this);
  }

  onKeySelect(key) {
    this.setState({selectedKey: this.state.selectedKey.id === key.id ? {} : key});
    // const index = this.state.selectedKeys.indexOf(id);
    // if(index === -1) {
    //   this.setState({selectedKeys: [...this.state.selectedKeys, id]});
    // } else {
    //   this.setState({selectedKeys: this.state.selectedKeys.filter(s => s !== id)});
    // }
  }

  onKeyBind(bind) {
    this.setState({binds: [...this.state.binds, {key: this.state.selectedKey.id, bind}], selectedKey: undefined})
  }

  render(){
    return (
      <div>
        <Keyboard onKeySelect={this.onKeySelect} {...this.state} />
        <Bind {...this.state} onKeyBind={this.onKeyBind} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));