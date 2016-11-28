import React, { Component, PropTypes } from 'react';
import StagesListItem from './stagesListItem';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardStage from './boardStage';

const ticket = {
  name: 'Hamlin',
  date: '2016-11-27',
  date2: '2016-11-28',
  group: true,
  comp: false,
  rush: true
};

export class StageBoard extends Component {
  renderSquare(i) {
    const x = i % 3;
    const y = Math.floor(i / 3);

    return (
      <div key={i}>
        <BoardStage x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardStage>
      </div>
    );
  }

  renderPiece(x, y) {
    const [ticketX, ticketY] = this.props.ticketPosition;
    if (x === ticketX && y === ticketY) {
      return <StagesListItem ticket={ticket}/>;
    }
  }
  render() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {squares}
      </div>
    );
  }
}

StageBoard.propTypes = {
  ticketPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(StageBoard);