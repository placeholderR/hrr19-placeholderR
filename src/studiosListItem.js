import React from 'react';

export default class StudiosListItem extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}