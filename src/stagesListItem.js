import React from 'react';

const style = {
  height: '5px',
  backgroundColor: '#bbb',
  padding: '1em',
  marginLeft: '15%',
  display: 'inline-block'
};

export default class StagesListItem extends React.Component {
  render() {
    return(
      <div style={style}>
        {this.props.ticket.name}
      </div>
    )
  }
}