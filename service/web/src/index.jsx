import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './comp';

const App = () => [
  <div>Now Working</div>,
  <Comp />
];

ReactDOM.render(<App/>, document.getElementById('app'));