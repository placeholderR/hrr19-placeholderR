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

var names = ['DP2', 'Image Match', 'Color Correction', 'Printing', 'ID Laminate', 'Done', 'Invoiced', 'Packaging'];

export default class Ticket extends React.Component {
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
              ref='createDate1'/>
              <br />
              Makeup Date:
              <input
              type='date'
              ref='createDate2'/>
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
    this.refs.createStage.value = 'Stage';

  }
}