import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as completeActions from "../../actions/actionList";

class issueDescripePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completeIssues: this.props.filterIssues,
      filteredIssues: {},
      issueNumber: this.props.match.params.issueNumber
    };
  }

  componentDidMount() {
    const gitUserName = this.props.match.params.gitUserName;
    const gitRepoName = this.props.match.params.gitRepoName;
    const gitIssueNumber = this.props.match.params.issueNumber;
    this.setState({
      completeIssues: this.props.filterIssues,
      filteredIssues: {},
      issueNumber: gitIssueNumber
    });
    // console.log("Git issue number", gitIssueNumber);
    this.props.actions.FilterAction(this.state);
  }

  render() {
    console.log(this.props);
    return (
      <div className="issueDescribeContainer">
        <h1>Issue Description</h1>
        <div>title: {this.props.filterIssues.title}</div>
        <div>Description: {this.props.filterIssues.body}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    filterIssues: state.filterIssues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(completeActions, dispatch)
  };
}

// export default connect(mapStateToProps)(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(issueDescripePage);
