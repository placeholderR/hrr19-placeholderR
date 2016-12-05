import _ from 'lodash';
import React from 'react';
import $ from 'jquery';

var style = {
  height: '100px',
  width: '300px',
  backgroundColor: '',
  padding: '1em',
  display: 'inline-block',
  fontSize: '1em',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  listStyle: 'none',
  color: ''
};

var style2 = {
  'backgroundColor': '#E6EDEB',
  'cursor': 'pointer',
  'height': '150px',
  'width': '400px',
  'display': 'inline-table',
  'padding': '2em',
  'border': '4px solid #81918E',
  'textAlign': 'center',

};


var style3 = {
  height: '100px',
  width: '300px',
  backgroundColor: '',
  padding: '1em',
  display: 'inline-block',
  fontSize: '1em',
  fontFamily: 'sans-serif',
  listStyle: 'none',
  fontColor: 'black'
};



var label = {
  option: ''
};

var names = ['ImageMatch', 'DP2', 'Color Correction', 'ID Laminate', 'Printing', 'Packaging', 'Invoiced', 'Done'];

var cloneStyle2 = style2;

// array with stages and cooresponding colors
// var names = [
//   {'ImageMatch' : '#afb8c6'},
//   {'DP2' : '#c0afc6'},
//   {'C/C' : '#db9db4'},
//   {'ID Laminate' : '#dbab9d'},
//   {'Printing' : '#eade85'},
//   {'Packaging' : '#9bea85'},
//   {'Invoiced' : '#96ddc1'},
//   {'Done' : '#c5c6c4'}
// ];

/*
ImageMatch #afb8c6
DP2 #c0afc6
C/C #db9db4
ID Laminate #dbab9d
Printing #eade85
Packaging #9bea85
Invoiced #96ddc1
Done #c5c6c4
*/


export class StagesListItem extends React.Component {
  // constructor method
  constructor(props) {
    super(props);
    // create the state isEditable and default to false for switching to true later
    // after the edit button is clicked
    this.state = {
      isEditable : false,
      date: '',
      date2: '',
      name: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDate2Change = this.handleDate2Change.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleDateChange(e) {
    this.setState({date: e.target.value});
  }
  handleDate2Change(e) {
    this.setState({date2: e.target.value});
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    style.backgroundColor = this.props.ticket.rush === true ? '#f40247' : '#82bae0';
    style.color = this.props.ticket.rush === true ? '#e2e2e2' : '#232222';
    cloneStyle2.backgroundColor =
      this.props.ticket.stage === 'ImageMatch' ? '#afb8c6'
    : this.props.ticket.stage === 'DP2' ? '#c0afc6'
    : this.props.ticket.stage === 'Color Correction' ? '#db9db4'
    : this.props.ticket.stage === 'ID Laminate' ? '#dbab9d'
    : this.props.ticket.stage === 'Printing' ? '#eade85'
    : this.props.ticket.stage === 'Packaging' ? '#9bea85'
    : this.props.ticket.stage === 'Invoiced' ? '#96ddc1'
    : this.props.ticket.stage === 'Done' ? '#c5c6c4'
    : '#E6EDEB'


    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    //console.log(names);
    if($('#' + this.props.ticket.stage)) {
      //console.log('stage ' + this.props.ticket.stage + ' already exists');

    }
    // if !isEditable
    //console.log(this.state.isEditable);
    if (!this.state.isEditable) {
      return (
        <div className='container text-center' id={this.props.ticket.stage + this.props.ticket.id} style={cloneStyle2}>
        <span style={{fontSize: '2em', textAlign: 'center', display: 'block'}}>{this.props.ticket.stage}</span>
          <ul style={style}>
          <li style={{fontSize: '1.5em'}}>{this.props.ticket.name}{label.option}</li>
          <li>Order Date: {this.props.ticket.date}</li>
          <li>Makeup Date: {this.props.ticket.date2}</li>
          </ul>
          <div>
            <select ref='ChangeStage'>
            <option value=''>Change Stage</option>
            {_.map(names, (name, index) => {

              return (
                <option key={index} value={name}>{name}</option>)
            })}
            </select>
            <button className='btn btn-primary' onClick={this.changeStage.bind(this)}>Move</button>
            <button className='btn btn-primary' onClick={this.editTicket.bind(this)}>Edit</button>
          </div>
        </div>
      );
    } else {
      return <div className='container text-center'id={this.props.ticket.stage + this.props.ticket.id} style={cloneStyle2}>
        <div className='row'>
          <span style={{textAlign: 'center', display: 'block'}}>{this.props.ticket.stage}</span>
            <form style={style3}>
              School Name: <input
              type='text'
              ref='EditName'
              value={this.state.name}
              onChange={this.handleNameChange}
              />
              Order Date: <input
              type='date'
              ref='Date1Name'
              value={this.state.date}
              onChange={this.handleDateChange}
              />
              Makeup Date: <input
              type='date'
              ref='Date2Name'
              value={this.state.date2}
              onChange={this.handleDate2Change}
              />
            </form>
            <button className='btn btn-primary' onClick={this.saveTicket.bind(this)}>Add</button>
          </div>
        </div>
    }
    // else
      // return a div that contains input tags instead of li tags for
      // ticket fields
  }
  editTicket(e) {
    e.preventDefault();
    // edit a ticket here
    // set the state isEditable to true
    // invoke renderEdit method
    var body = {
      isEditable: true,
      name: this.props.ticket.name,
      date: this.props.ticket.date,
      date2: this.props.ticket.date2
    };
    this.setState(body);
  }
  saveTicket(e) {
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
          name: this.state.name,
          date: this.state.date,
          date2: this.state.date2
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