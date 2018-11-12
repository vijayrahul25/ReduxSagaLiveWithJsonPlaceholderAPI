import React from "react";
import { Link } from "react-router-dom";

export class TRPostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;

    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>
          <strong>{post.title} </strong>
        </td>
        <td>{this.props.authorname}</td>

        <td>
          {post.body && <span>{post.body.substr(1, 100)}</span>}
          <Link to={`/ShowPost/${post.id}`}> more...</Link>
        </td>
      </tr>
    );
  }
}
