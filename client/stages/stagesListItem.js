import React, { Component } from 'react';

const style = {
  height: '5px',
  width: '70px',
  backgroundColor: '',
  padding: '1em',
  display: 'inline-block',
  fontSize: '9px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif'
};

const label = {
  option: ''
};

export default class StagesListItem extends Component {
  render() {
    style.backgroundColor = this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    return (
      <li style={style} id={this.props.ticket.id}>{this.props.ticket.name + label.option}</li>
    );
  }
}