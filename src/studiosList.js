import _ from 'lodash';
import React from 'react';
import StudiosHeader from './studiosHeader'
import StudiosListItem from './studiosListItem'

export default class StudiosList extends React.Component {
  renderItems() {
    return _.map(this.props.studios, (studio, index) => <StudiosListItem key={index} {...studio} />);
  }
  render() {
    return(
      <table>
        <StudiosHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}