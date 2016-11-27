import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import Nav from './nav';
import Home from './home';
import Studio from './studio';
import StageBoard from './stages/stageBoard';



ReactDOM.render(
  <StageBoard ticketPosition={[0,0]} />,
  document.getElementById('app')
);

