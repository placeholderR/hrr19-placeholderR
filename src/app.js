import React from 'react';
import StudiosList from './studiosList';
import StagesList from './stagesList';
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
      studios,
      tickets: []
    };
  }
  render() {
    return(
      <div>
        <Nav />
        <h1>stageUp - Track your order stages with ease!</h1>
        <StudiosList studios={this.state.studios}/>
        <Ticket
          createTicket={this.createTicket.bind(this)}
        />
        <StagesList
          tickets={this.state.tickets}
        />
      </div>
    )
  }
  createTicket(ticket) {
    this.state.tickets.push({
      ticket
    });

    this.setState({tickets: this.state.tickets});
  }
}