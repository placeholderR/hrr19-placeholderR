import React from 'react';

const style = {
  height: '150px',
  width: '200px',
  backgroundColor: '#bbb',
  padding: '3em',
  marginLeft: '15%'
};

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
          <button>Add Ticket</button>
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
          name: this.refs.createInput.value,
          rush: this.refs.createRush.value || false
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