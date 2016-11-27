import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import StagesListItem from './stagesListItem';

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

export default class StagesList extends Component {
  render() {
    const stageNames = ['Image Match', 'DP2', 'Color', 'Correction', 'Packaging', 'Printing', 'ID Laminate', 'Done', 'Invoiced'];
    if (this.props.tickets.length !== 0) {
      return(
        <div id='stage' style={{'padding': '5em'}}>
          <div style={style}>
            <span>{stageNames[0]}</span>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return(<div style={style}></div>)
    }
  }
}

StagesList.propTypes = {
  tickets: PropTypes.array.isRequired
};