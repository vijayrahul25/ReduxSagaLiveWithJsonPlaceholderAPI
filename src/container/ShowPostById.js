import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { showPostsById } from "../actions/postActions";
import { mapArrayKeyToObjectIdAndSort } from "../utility";

class ShowPosts extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    //load post by id if not exist in state post array
    if (!this.props.posts || this.props.posts.length === 0) {
      await this.props.showPostsById(this.props.match.params.id);
    }
  }
  render() {
    if (this.props.isError) {
      let dataError = this.props.errorMessage;
      return (
        <div className="alert alert-danger" role="alert">
          {dataError}
        </div>
      );
    }
    if (this.props.inProgress) {
      let dataError = this.props.inProgressMessage;
      return (
        <div className="alert alert-primary" role="alert">
          {dataError}
        </div>
      );
    }
    if (!this.props.posts || !this.props.posts.length) {
      return null;
    }

    let postIndex = this.props.posts.findIndex(
      postdata => postdata.id == this.props.match.params.id
    );
    let post = this.props.posts[postIndex];

    if (post) {
      return (
        <div className="App">
          <br />
          <Link className="btn btn-primary" to={`/EditPost/${post.id}`}>
            Edit Post..
          </Link>
          <br />
          <h2>{post.title}</h2>
          <span>Author Id:</span>
          <strong>{post.userId}</strong>
          <hr />
          <p>{post.body}</p>
        </div>
      );
    } else {
      return <div>Post not found</div>;
    }
  }
}

function mapStateToProps(state) {
  var postData = mapArrayKeyToObjectIdAndSort(state.postReducer.posts);

  return {
    posts: postData,
    isError: state.commonReducer.isError,
    errorMessage: state.commonReducer.errorMessage,
    inProgress: state.commonReducer.inProgress,
    inProgressMessage: state.commonReducer.inProgressMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showPostsById }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPosts);
