import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import Nav from './nav';
import Home from './home';
import Studio from './studio';
import Footer from './footer';

ReactDOM.render(
  <div className='jumbotron' style={{fontFamily: 'Sans-Serif'}}>
    <div className='row'>
      <div className='col-lg-8 col-lg-offset-2 text center'>
        <Home />
        <Studio />
        <Stage />
        <Footer />
      </div>
    </div>
  </div>, document.getElementById('app'));