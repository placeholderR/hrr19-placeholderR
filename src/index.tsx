import * as React from 'react';
import * as ReactDOM from 'react-dom';

// relative path to prevent Typescript from looking in node-modules folder
import { App } from './components/app';

ReactDOM.render(
  <App
  />, document.getElementById('app'));