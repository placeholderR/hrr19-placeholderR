import React from 'react';

export class StudiosListItem extends React.Component {
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