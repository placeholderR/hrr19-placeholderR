import React from 'react';
import {StagesList} from './stages/stagesList';
import Ticket from './ticket/ticket';

export default class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }
  componentDidMount() {
    fetch('/api/tickets', {
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(promise => {
      return promise.json();
    })
    .then(models => {
      this.setState({tickets: models});
    })
    .catch(err => {
      //console.log(err,'error!!!!');
    })
  }
  render() {
    return(
      <div>
        <Ticket
          createTicket={this.createTicket.bind(this)}
        />
        <StagesList tickets={this.state.tickets} />
      </div>
    );
  }
  createTicket(ticket) {
    //console.log('our object',ticket);
    this.componentDidMount();
  }
}