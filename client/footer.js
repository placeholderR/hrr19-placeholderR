"use strict";

import React from 'react';

const Footer = (props) => (
  <footer className="primary-footer">
    <small>&copy; stageUp</small>
    <nav className="nav">
      <ul style={{listStyle: 'none'}}>
        <li><a href="#">Home</a></li>
        <li><a href="https://github.com/placeholderR/stageUp/blob/master/_PRESS-RELEASE.md">Why choose stageUp</a></li>
        <li><a href="https://github.com/placeholderR/stageUp/blob/master/README.md">About Us</a></li>
      </ul>
    </nav>
  </footer>
)

module.exports = Footer;