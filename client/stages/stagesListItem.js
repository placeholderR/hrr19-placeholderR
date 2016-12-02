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
  // constructor method
  constructor(props) {
    super(props);
    // create the state isEditable and default to false for switching to true later
    // after the edit button is clicked
    this.state = {isEditable : false};
  }
  render() {
    style.backgroundColor = this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    //console.log(names);
    if($('#' + this.props.ticket.stage)) {
      //console.log('stage ' + this.props.ticket.stage + ' already exists');

    }
    // if !isEditable
    if (!this.state.isEditable) {
      return (
        <div id={this.props.ticket.stage + this.props.ticket.id}style={style2}>
        <span style={{textAlign: 'center', display: 'block'}}>{this.props.ticket.stage}</span>
          <ul onClick={this.moveStage.bind(this)} style={style}>
          <li>School Name: {this.props.ticket.name}{label.option}</li>
          <li>Order Date: {this.props.ticket.date}</li>
          <li>Makeup Date: {this.props.ticket.date2}</li>
          </ul>
          <div className='container'>
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
        </div>
      );
    } else {
      // else return a div that contains input tags instead of li tags for ticket fields
      return <div id={this.props.ticket.stage + this.props.ticket.id}style={style2}>
        <span style={{textAlign: 'center', display: 'block'}}>{this.props.ticket.stage}</span>
          <form style={style}>
            School Name: <input type='text' ref='EditName' placeholder={this.props.ticket.name} />
            Order Date: <input type='date' ref='Date1Name' />{this.props.ticket.date}
            Makeup Date: <input type='date' ref='Date2Name' />{this.props.ticket.date2}
          </form>
          <button onClick={this.saveTicket.bind(this)}>Add</button>
        </div>
    }
  }
  editTicket(e) {
    e.preventDefault();
    // edit a ticket here
    // set the state isEditable to true
    // invoke renderEdit method
    var edit = this.state.isEditable;
    edit = true;
    this.setState({isEditable: edit});
  }
  saveTicket(e) {
    e.preventDefault();
    // edit a ticket here
    // set the state isEditable to true
    // invoke renderEdit method
    fetch('/api/tickets/' + this.props.ticket.id, {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(
        {
          name: this.refs.EditName.value,
          date: this.refs.Date1Name.value,
          date2: this.refs.Date2Name.value
        }
      )
    })
    .then( body => {
      this.props.updateTicket(body);
    })
    .catch( err => {
      //console.log(err,'error!');
    })
    var save = this.state.isEditable;
    save = false;
    this.setState({isEditable: save});

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