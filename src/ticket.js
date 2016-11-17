import React from 'react';

const style = {
  height: '100px',
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
          Group<input type='radio' ref='createGroup'/>
          Composite<input type='radio' ref='createComp'/>
          <br />
          Rush<input type='radio' ref='createRush'/>
          <button>Add Ticket</button>
        </form>

      </div>
    )
  }
  handleCreate(e) {
    e.preventDefault();

    this.props.createTicket(
      {
        name: this.refs.createInput.value,
        date1: this.refs.createDate1.value,
        date2: this.refs.createDate2.value,
        group: this.refs.createGroup.checked,
        comp: this.refs.createComp.checked,
        rush: this.refs.createRush.checked
      }
    );
    // resetting fields
    this.refs.createInput.value = '';
    this.refs.createDate1.value = '';
    this.refs.createDate2.value = '';
    this.refs.createGroup.checked = false;
    this.refs.createComp.checked = true;
    this.refs.createRush.checked = false;

  }
}