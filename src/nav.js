import React from 'react';

const style = {
  'float': 'right',
  'display': 'block'
};

export default class Nav extends React.Component {
  render() {
    return(
      <nav style={style}>
        <button>Studios</button>
        <button>Log Out</button>
      </nav>
    )
  }
}