import React, { Component } from "react";

class issueDescripePage extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    // debugger;
    const gitUserName = this.props.match.params.gitUserName;
    const gitRepoName = this.props.match.params.gitRepoName;
    const gitIssueNumber = this.props.match.params.issueNumber;
    console.log("Git issue number", gitIssueNumber);
  }

  render() {
    // debugger;
    console.log(this.props);
    return (<div>
              <h1>Issue Describe Page</h1> 
            </div>);
  }
}

export default issueDescripePage;
