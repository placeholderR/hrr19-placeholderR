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
      <div className='container text-center' style={{backgroundColor: '#CDCECE', borderRadius: '20px'}}>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 text center'>
            <Ticket
              createTicket={this.createTicket.bind(this)}
            />
            <br/>
            <br/>
            <StagesList tickets={this.state.tickets}
                        updateTicket={this.createTicket.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  createTicket() {
    this.componentDidMount();
  }
}