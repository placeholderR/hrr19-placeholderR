import React, { Component, PropTypes } from 'react';
import StagesListItem from './stagesListItem';
import StageList from './stagesList';

const ticket = {
  name: 'Hamlin',
  date: '2016-11-27',
  date2: '2016-11-28',
  group: true,
  comp: false,
  rush: true
};

export default class StageBoard extends Component {
  render() {
    return (
      <div>
        <StageList tickets={[ticket]}>
          <StagesListItem ticket={ticket}/>
        </StageList>
      </div>
    );
  }
}

StageBoard.propTypes = {
  ticketPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};