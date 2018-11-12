import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showPosts } from "../actions/postActions";
import { TRPostList } from "../component/TRPostList";
import { mapArrayKeyToObjectIdAndSort } from "../utility";

class ShowPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    //loading this at the start of app, so that we don't loadd it everytime
    //this.props.showPosts();
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
    if (!this.props.authors || !this.props.authors.length) {
      return <div>Author is not loaded...</div>;
    }

    let data = this.props.posts.map((post, index) => {
      //var author  = this.props.authors[post.userId];

      var author = this.props.authors.find(function(element) {
        if (element) {
          return element.id === post.userId;
        }
      });

      return <TRPostList key={post.id} post={post} authorname={author.name} />;
    });

    return (
      <div className="App">
        <h2>PostList</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  var postData = mapArrayKeyToObjectIdAndSort(state.postReducer.posts);
  var authortData = mapArrayKeyToObjectIdAndSort(state.authorReducer.authors);

  return {
    posts: postData,
    authors: authortData,
    isError: state.commonReducer.isError,
    errorMessage: state.commonReducer.errorMessage,
    inProgress: state.commonReducer.inProgress,
    inProgressMessage: state.commonReducer.inProgressMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showPosts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPosts);
