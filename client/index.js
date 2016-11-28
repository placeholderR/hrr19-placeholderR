import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import Nav from './nav';
import Home from './home';
import Studio from './studio';
import StageBoard from './stages/stageBoard';
import { observe } from './game';

const rootEl = document.getElementById('app');

observe(ticketPosition =>
  ReactDOM.render(
    <StageBoard ticketPosition={ticketPosition} />,
    rootEl
  )

);

