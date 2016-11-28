import React, { Component, PropTypes } from 'react';
import StagesList from './stagesList';
import { moveTicket } from '../game';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

// this.state.tickets or this.props.tickets
const ticket = [{
  name: 'Hamlin',
  date: '2016-11-27',
  date2: '2016-11-28',
  group: true,
  comp: false,
  rush: true
}];

const stageTarget = {
  drop(props) {
    moveTicket(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export class BoardStage extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
      <StagesList tickets={this.props.tickets}>
        {this.props.children}
      </StagesList>
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    )
  }
}

BoardStage.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.TICKET, stageTarget, collect)(BoardStage);