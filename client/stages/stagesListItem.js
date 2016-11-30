import _ from 'lodash';
import React from 'react';

const style = {
  height: '100px',
  width: '300px',
  backgroundColor: '',
  padding: '1em',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  listStyle: 'none'
};

const style2 = {
  'backgroundColor': 'grey',
  'cursor': 'pointer',
  'height': '150px',
  'width': '690px',
  'display': 'inline-table',
  'padding': '2em',
  'border': '2px solid black',
  'textAlign': 'center'
};

const label = {
  option: ''
};

const names = ['DP2', 'Image Match', 'Color Correction', 'Printing', 'ID Laminate', 'Done', 'Invoiced', 'Packaging'];

export class StagesListItem extends React.Component {
  render() {
    style.backgroundColor = this.props.ticket.rush === true ? '#ce2323' : '#bbb';
    label.option = this.props.ticket.group === true ? ' G' : this.props.ticket.comp === true ? ' C' : '';
    //console.log(names);
    return (
      <div style={style2}>
      <span>{this.props.ticket.stage}</span>
        <ul id={this.props.ticket.id} style={style}>
          <li>{this.props.ticket.name + label.option}</li>
          <li>{this.props.ticket.date}</li>
          <li>{this.props.ticket.date2}</li>
        </ul>
        <div>
          <select ref='ChangeStage'>
          {_.map(names, (name, index) => {

            return <option key={index}>{name}</option>
          })}
          }
          </select>
          <button onClick={this.changeStage.bind(this)}>Move</button>
        </div>
      </div>
    );
  }
  changeStage(e) {
    e.preventDefault();

    //console.log(this.refs.ChangeStage.value);
  }
}