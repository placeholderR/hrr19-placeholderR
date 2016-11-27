import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import Nav from './nav';
import Home from './home';
import Studio from './studio';

ReactDOM.render(
  <div>
    <Nav />
    <Home />
    <Studio />
    <Stage />
  </div>, document.getElementById('app'));

