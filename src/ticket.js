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
        <form>
          <input type='text' placeholder='School Name here' />
          Date<input type='date' />
          Group<input type='radio' />
          Composite<input type='radio' />
          <br />
          Rush<input type='radio' />
        </form>
        <button>Add Ticket</button>
      </div>
    )
  }
}