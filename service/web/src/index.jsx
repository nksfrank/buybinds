import React from 'react';
import ReactDOM from 'react-dom';
import {Keyboard} from './keyboard';

const App = () => (
  <div>
    <div>Now Working</div>
    <Keyboard />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));