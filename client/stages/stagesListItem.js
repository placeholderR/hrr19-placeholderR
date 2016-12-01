import _ from 'lodash';
import React from 'react';
import $ from 'jquery';

var style = {
  height: '100px',
  width: '300px',
  backgroundColor: '',
  padding: '1em',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  listStyle: 'none'
};

var style2 = {
  'backgroundColor': 'grey',
  'cursor': 'pointer',
  'height': '150px',
  'width': '690px',
  'display': 'inline-table',
  'padding': '2em',
  'border': '2px solid black',
  'textAlign': 'center'
};


var label = {
  option: ''
};

var names = ['DP2', 'Image Match', 'Color Correction', 'Printing', 'ID Laminate', 'Done', 'Invoiced', 'Packaging'];

export class StagesListItem extends React.Component {
  render() {
    style.backgroundColor = this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    //console.log(names);
    if($('#' + this.props.ticket.stage)) {
      //console.log('stage ' + this.props.ticket.stage + ' already exists');
      // sort here by ticket id

    }
    return (
      <div id={this.props.ticket.stage + this.props.ticket.id}style={style2}>
      <span style={{textAlign: 'center', display: 'block'}}>{this.props.ticket.stage}</span>
        <ul onClick={this.moveStage.bind(this)} style={style}>
        <li>School Name: {this.props.ticket.name + label.option}</li>
        <li>Order Date: {this.props.ticket.date}</li>
        <li>Makeup Date: {this.props.ticket.date2}</li>
        </ul>
        <select ref='ChangeStage'>
        <option value=''>Change Stage</option>
        {_.map(names, (name, index) => {

          return (
            <option key={index} value={name}>{name}</option>)
        })}
        </select>
        <button onClick={this.changeStage.bind(this)}>Move</button>
        <button onClick={this.editTicket.bind(this)}>Edit</button>
      </div>
    );
  }

  moveStage() {
  }
  editTicket(e) {
    e.preventDefault();
    // edit a ticket here

  }
  changeStage(e) {
    e.preventDefault();

    //console.log(this.refs.ChangeStage.value);

    fetch('/api/tickets/' + this.props.ticket.id, {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(
        {
          stage: this.refs.ChangeStage.value
        }
      )
    })
    .then( body => {
      this.props.updateTicket(body);
    })
    .catch( err => {
      //console.log(err,'error!');
    })

    this.refs.ChangeStage.value = '';
  }
}