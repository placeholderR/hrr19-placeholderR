import React, { Component, PropTypes } from 'react';
import StagesListItem from './stagesListItem';
import StagesList from './stagesList';

const ticket = {
  name: 'Hamlkin',
  date: '2016-11-27',
  date2: '2016-11-28',
  group: true,
  comp: false,
  rush: true
};

export default class StageBoard extends Component {
  renderSquare(i) {
    const x = i % 3;
    const y = Math.floor(i / 3);

    const [ticketX, ticketY] = this.props.ticketPosition;
    const piece = (x === ticketX && y === ticketY) ? <StagesListItem ticket={ticket}/> : null;

    return (
      <div key={i}>
        <StagesList tickets={[ticket]}>
          {piece}
        </StagesList>
      </div>
    );
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