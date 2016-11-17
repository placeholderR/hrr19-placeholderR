import _ from 'lodash';
import React from 'react';

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

export default class StagesList extends React.Component {
  render() {
    return(
      <div id='stage' style={{'padding': '5em'}}>
        <div style={style}>
          <span>Image Match</span>
        </div>
        <div style={style}>
          <span>DP2</span>
        </div>
        <div style={style}>
          <span>Color Correction</span>
        </div>
        <br />
        <div style={style}>
          <span>Packaging</span>
        </div>
        <div style={style}>
          <span>Printing</span>
        </div>
        <div style={style}>
          <span>ID Laminate</span>
        </div>
        <br />
        <div style={style}>
          <span>Done</span>
        </div>
        <div style={style}>
          <span>Invoiced</span>
        </div>
      </div>
    )
  }
}