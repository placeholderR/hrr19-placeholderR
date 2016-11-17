import React from 'react';
import StudiosList from './studiosList';
import StagesList from './stagesList'
import Nav from './nav'

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
      studios
    };
  }
  render() {
    return(
      <div>
        <Nav />
        <h1>stageUp - Track your order stages with ease!</h1>
        <StudiosList studios={this.state.studios}/>
        <StagesList />
      </div>
    )
  }
}