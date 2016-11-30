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
      return(
        <div id='stage' style={{'padding': '5em'}}>
        {_.map(this.props.tickets, (ticket, index) => {
          return <StagesListItem key={index} ticket={ticket} />
        })}
        </div>
      );
    } else {
      return(<div>Loading...</div>)
    }
  }
}