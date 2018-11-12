import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadAuthors } from "../actions/authorActions";
import { TRAuthors } from "../component/TRAuthors";
import { mapArrayKeyToObjectIdAndSort } from "../utility";

class showAuthors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    //loading this at the start of app, so that we don't loadd it everytime
    // this.props.loadAuthors();
  }

  render() {
    //console.log(this.props.posts);
    if (this.props.isError) {
      let dataError = this.props.errorMessage;
      return (
        <div className="alert alert-danger" role="alert">
          {dataError}
        </div>
      );
    }
    if (this.props.inProgress) {
      console.log("in progress");
      let dataError = this.props.inProgressMessage;
      return (
        <div className="alert alert-primary" role="alert">
          {dataError}
        </div>
      );
    }

    if (!this.props.authors || !this.props.authors.length) {
      return null;
    }

    let data = this.props.authors.map((author, index) => (
      <TRAuthors key={author.id} author={author} />
    ));
    const post = this.props.post;
    return (
      <div className="App">
        <h2>PostList</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>NAme</th>
              <th>Username</th>
              <th>Email</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  var authorData = mapArrayKeyToObjectIdAndSort(state.authorReducer.authors);

  return {
    authors: authorData,
    isError: state.commonReducer.isError,
    errorMessage: state.commonReducer.errorMessage,
    inProgress: state.commonReducer.inProgress,
    inProgressMessage: state.commonReducer.inProgressMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadAuthors }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showAuthors);
