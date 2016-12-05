import _ from 'lodash';
import React from 'react';
import {StagesListItem} from './stagesListItem';

const style = {
  'backgroundColor': 'grey',
  'cursor': 'pointer',
  'height': '100px',
  'width': '100px',
  'display': 'inline-table',
  'padding': '2em',
  'border': '2px solid black',
  'textAlign': 'center'
};

export class StagesList extends React.Component {
  render() {

    if (this.props.tickets.length !== 0) {
      //sort dates by oldest first
      this.props.tickets.sort((a, b) => {
        return a.date < b.date;
      })
      return(
        <div className='container text-center' id='stage'>
        {_.map(this.props.tickets, (ticket, index) => {
          return <StagesListItem key={index} ticket={ticket} updateTicket={this.props.updateTicket}/>
        })}
        </div>
      );
    } else {
      return(
        <div className='container text-center'>
          There are no tickets currently open...
        </div>
      );
    }
  }
}