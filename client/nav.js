import React from 'react';

const style = {
  display: 'block',
  marginLeft: '60%'
};

export default class Nav extends React.Component {
  render() {
    return(
      <nav style={style}>
        <button>Studios</button>
        <button onClick={this.handleLogOut.bind(this)} ref='logOut'>Log Out</button>
      </nav>
    );
  }
  handleLogOut(e) {
    // console.log(this.refs.logOut);
  }
}