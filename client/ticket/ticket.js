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