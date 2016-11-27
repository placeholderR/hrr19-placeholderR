import React from 'react';
import {StudiosList} from './studios/studiosList';
import {StudiosListItem} from './studios/studiosListItem';

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


export default class Studio extends React.Component {
  render() {
    return (
      <h2>Studios</h2>
    );
  }
}