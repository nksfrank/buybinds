import React from 'react';
import {Key} from './key';
import {mapKeys} from './maps';

export class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binds: [],
      selectedKeys: [],
      keys: mapKeys()
    }
  }

  selectKey(id) {
    const index =  this.state.selectedKeys.indexOf(id);
    if(index === -1) {
      this.setState({selectedKeys: [...this.state.selectedKeys, id]});
    } else {
      this.setState({selectedKeys: this.state.selectedKeys.filter(s => s !== id)});
    }
  }

  isSelected({id}) {
    return this.state.selectedKeys.indexOf(id) > -1;
  }

  isBound({getKey}) {
    return this.state.binds.indexOf(getKey()) > -1;
  }
  
  render() {
    return (
      <div className="keyboard">
        {this.state.keys.map(key =>
          <Key
            key={key.id}
            isSelected={this.isSelected(key)}
            isBound={this.isBound(key)}
            onClick={(id) => this.selectKey(id)}
            {...key}
          />)}
      </div>);
  }
};