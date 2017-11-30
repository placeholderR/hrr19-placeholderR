"use strict";

import React from 'react';

const Footer = (props) => (
  <footer className="primary-footer">
    <small>&copy; stageUp</small>
    <nav className="nav">
      <ul style={{listStyle: 'none'}}>
        <li><a href="#">Home</a></li>
        <li><a href="https://github.com/placeholderR/stageUp/blob/master/_PRESS-RELEASE.md">Why choose stageUp</a></li>
        <li><a href="https://github.com/placeholderR/stageUp/blob/master/README.md">About Us</a></li>
      </ul>
    </nav>
  </footer>
)

module.exports = Footer;
import React from 'react';
import { Nav } from 'react-bootstrap/lib';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>stageUp</h1>
      </div>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import Nav from './nav';
import Home from './home';
import Studio from './studio';
import Footer from './footer';

ReactDOM.render(
  <div className='jumbotron' style={{fontFamily: 'Sans-Serif'}}>
    <div className='row'>
      <div className='col-lg-8 col-lg-offset-2 text center'>
        <Home />
        <Studio />
        <Stage />
        <Footer />
      </div>
    </div>
  </div>, document.getElementById('app'));
import React from 'react';

const style = {
  display: 'block',
  marginLeft: '60%'
};

export default class Nav extends React.Component {
  render() {
    return(
      <nav style={style}>
        <button>Studios</button>
        <button onClick={this.handleLogOut.bind(this)} ref='logOut'>Log Out</button>
      </nav>
    );
  }
  handleLogOut(e) {
    // console.log(this.refs.logOut);
  }
}
import React from 'react';
import {StagesList} from './stages/stagesList';
import Ticket from './ticket/ticket';

export default class Stage extends React.Component {
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
      <div className='container text-center' style={{backgroundColor: '#CDCECE', borderRadius: '20px'}}>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 text center'>
            <Ticket
              createTicket={this.createTicket.bind(this)}
            />
            <br/>
            <br/>
            <StagesList tickets={this.state.tickets}
                        updateTicket={this.createTicket.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  createTicket() {
    this.componentDidMount();
  }
}
import _ from 'lodash';
import React from 'react';
import {StagesListItem} from './stagesListItem';

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

export class StagesList extends React.Component {
  render() {

    if (this.props.tickets.length !== 0) {
      //sort dates by oldest first
      this.props.tickets.sort((a, b) => {
        return a.date < b.date;
      })
      return(
        <div className='container text-center' id='stage'>
        {_.map(this.props.tickets, (ticket, index) => {
          return <StagesListItem key={index} ticket={ticket} updateTicket={this.props.updateTicket}/>
        })}
        </div>
      );
    } else {
      return(
        <div className='container text-center'>
          There are no tickets currently open...
        </div>
      );
    }
  }
}
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
    style.backgroundColor = this.props.ticket.rush === true ? '#f40247' : 'white';
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
      <div className='container'>
        <div className='row'>
          <h3>ColorMeStudio</h3>
        </div>
      </div>
    );
  }
}
import React from 'react';

export class StudiosHeader extends React.Component {
  render() {
    return(

        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
    )
  }
}
import _ from 'lodash';
import React from 'react'
import StudiosHeader from './studiosHeader'
import StudiosListItem from './studiosListItem'

export class StudiosList extends React.Component {
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
import React from 'react';

export class StudiosListItem extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}
import React from 'react';
import _ from 'lodash';

var style2 = {
  'backgroundColor': '#E6EDEB',
  'cursor': 'pointer',
  'height': '150px',
  'width': '400px',
  'display': 'inline-table',
  'padding': '2em',
  'border': '4px solid #81918E',
  'textAlign': 'center'
};

var names = ['ImageMatch', 'DP2', 'Color Correction', 'ID Laminate', 'Printing', 'Packaging', 'Invoiced', 'Done'];

var today = new Date();
var month = today.getMonth();
var date = today.getDate();
var datePadding = date < 10 ? ('0' + date) : date;
var monthPadding = (month < 10) ? ('0' + month + 1) : month + 1;
var fullDate = today.getFullYear() + '-' + monthPadding + '-' + datePadding;
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

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: fullDate,
      date2: fullDate
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDate2Change = this.handleDate2Change.bind(this);
  }
  handleDateChange(e) {
    this.setState({date: e.target.value});
  }
  handleDate2Change(e) {
    this.setState({date2: e.target.value});
  }
  render() {
    return(
      <div className='container text-center' style={style2}>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 text center'>
            <h3>Ticket Creator</h3>
            <form className='no-padding' onSubmit={this.handleCreate.bind(this)}>
              Order ID:
              <input
              type='text'
              placeholder='School Name ID#'
              ref='createInput'/>
              <br />
              Order Date:
              <input
              type='date'
              ref='createDate1'
              value={this.state.date}
              onChange={this.handleDateChange}
              />
              <br />
              Makeup Date:
              <input
              type='date'
              ref='createDate2'
              value={this.state.date2}
              onChange={this.handleDate2Change}
              />
              <br />
              Group:
              <input
              type='radio'
              ref='createGroup'/>
              Composite<input
              type='radio'
              ref='createComp'/>
              <br />
              <span
              style={{color: 'red'}}>Rush</span>
              <input
              type='radio'
              ref='createRush'/>
              <br />
              <select ref='createStage'>
              <option value=''>Change Stage</option>
              {_.map(names, (name, index) => {

                return (
                  <option key={index} value={name}>{name}</option>)
              })}
              </select>
              <button className='btn btn-primary'>Add Ticket</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  handleCreate(e) {
    e.preventDefault();

    fetch('/api/tickets', {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        {
          name : this.refs.createInput.value,
          group: this.refs.createGroup.checked,
          comp : this.refs.createComp.checked,
          rush : this.refs.createRush.checked,
          stage: this.refs.createStage.value,
          date: this.refs.createDate1.value,
          date2: this.refs.createDate2.value
        }
      )
    })
    .then( body => {
      this.props.createTicket(body);
    })

    // resetting fields
    this.refs.createInput.value = '';
    this.refs.createDate1.value = '';
    this.refs.createDate2.value = '';
    this.refs.createGroup.checked = false;
    this.refs.createComp.checked = false;
    this.refs.createRush.checked = false;

  }
}