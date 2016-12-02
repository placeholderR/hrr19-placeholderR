import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap/lib';

const style = {
  height: '150px',
  width: '200px',
  backgroundColor: '#bbb',
  padding: '3em',
  marginLeft: '15%'
};

var names = ['DP2', 'Image Match', 'Color Correction', 'Printing', 'ID Laminate', 'Done', 'Invoiced', 'Packaging'];

export default class Ticket extends React.Component {
  render() {
    return(
      <div style={style}>
        <form onSubmit={this.handleCreate.bind(this)}>
          Order ID
          <input type='text' placeholder='School Name ID#' ref='createInput'/>
          Order Date<input type='date' ref='createDate1'/>
          Makeup Date<input type='date' ref='createDate2'/>
          <br />
          Group<input type='radio' ref='createGroup'/>
          Composite<input type='radio' ref='createComp'/>
          <br />
          <span style={{color: 'red'}}>Rush</span><input type='radio' ref='createRush'/>
          <br />
          <select ref='createStage'>
          <option value=''>Change Stage</option>
          {_.map(names, (name, index) => {

            return (
              <option key={index} value={name}>{name}</option>)
          })}
          </select>
          <Button bsStyle='primary'>Add Ticket</Button>
        </form>

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