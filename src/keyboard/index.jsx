import React from 'react';
import { Key } from './key';
import { mapKeys } from './maps';

export class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: mapKeys()
    };

    this.isSelected = this.isSelected.bind(this);
    this.isBound = this.isBound.bind(this);
  }

  isSelected({ id }) {
    return this.props.selectedKey.id === id;
    // return this.props.selectedKeys.indexOf(id) > -1;
  }

  isBound({ id }) {
    return this.props.binds.some(({ key }) => {
      key === id;
    });
  }

  render() {
    return (
      <div className="keyboard">
        {this.state.keys.map(key => (
          <Key
            key={key.id}
            isSelected={this.isSelected(key)}
            isBound={this.isBound(key)}
            onClick={() => this.props.onKeySelect(key)}
            {...key}
          />
        ))}
      </div>
    );
  }
}
