import React from 'react';
import Ticket from './ticket';

const style = {
  height: '5px',
  width: '70px',
  backgroundColor: '', // light red, not very blinding
  padding: '1em',
  marginLeft: '15%',
  display: 'inline-block',
  fontSize: '9px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif'
};

const label = {
  option: ''
};

export default class StagesListItem extends React.Component {
  render() {
    style.backgroundColor= this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    return(
      <div style={style}>
        {this.props.ticket.name + label.option}
      </div>
    );
  };
};