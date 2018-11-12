import React from "react";
import { Link } from "react-router-dom";

export class TRAuthors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const author = this.props.author;
    return (
      <tr key={author.id}>
        <td>
          <strong>{author.id} </strong>
        </td>
        <td>{author.name}</td>
        <td>{author.username}</td>
        <td>{author.email}</td>
        <td>
          ... 
        </td>
      </tr>
    );
  }
}
