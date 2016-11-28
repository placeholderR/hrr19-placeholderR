import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const ticketSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const label = {
  option: ''
};

export class StagesListItem extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    const style = {
      height: '5px',
      width: '70px',
      backgroundColor: '',
      padding: '1em',
      display: 'inline-block',
      fontSize: '9px',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move'
    };

    style.backgroundColor = this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    return connectDragSource(
      <li style={style} id={this.props.ticket.id}>{this.props.ticket.name + label.option}</li>
    );
  }
}

StagesListItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TICKET, ticketSource, collect)(StagesListItem);