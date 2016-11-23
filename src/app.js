import React from 'react';
import StudiosList from './studiosList';
import {StagesList} from './stagesList';
import Nav from './nav';
import Ticket from './ticket';

const studios = [
  {
    name: 'Studio1',
    'img': 'http://icons.iconarchive.com/icons/ncrow/mega-pack-2/256/Pinnacle-Studio-icon.png'
  },
  {
    name: 'Studio2',
    'img': 'http://icons.iconarchive.com/icons/ncrow/mega-pack-2/256/Pinnacle-Studio-icon.png'
  }
];


export default class App extends React.Component {
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
        <Nav />
        <h1>stageUp - Track your order stages with ease!</h1>
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