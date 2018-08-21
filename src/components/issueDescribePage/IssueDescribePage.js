import React, { Component } from "react";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as completeActions from '../../actions/actionList';
import store from '../../store/configureStore';

class issueDescripePage extends Component {

  constructor(props){
    super(props);
    debugger;
    /*store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.

      this.setState({
        items: store.getState()
      });
    });*/
    this.state = {
        completeIssues: this.props.filterIssues,
        filteredIssues: {},
        issueNumber : this.props.match.params.issueNumber
    }
    // this.props.filterIssues.title="";
    // this.props.filterIssues.body ="";
  }

  componentDidMount() {
    // debugger;
    const gitUserName = this.props.match.params.gitUserName;
    const gitRepoName = this.props.match.params.gitRepoName;
    const gitIssueNumber = this.props.match.params.issueNumber;
    this.setState({
      completeIssues: this.props.filterIssues,
      filteredIssues: {},
      issueNumber : gitIssueNumber
    })
    console.log("Git issue number", gitIssueNumber);
    debugger;
    this.props.actions.FilterAction(this.state);
  }

  render() {
    // debugger;
    console.log(this.props);
    return (<div>
              <h1>Issue Describe Page:</h1>
              <div>
                title: {this.props.filterIssues.title}
              </div> 
              <div>
                Description: {this.props.filterIssues.body}
              </div>
            </div>);
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
  return {
      filterIssues: state.filterIssues
  };

}

function mapDispatchToProps(dispatch) {
  console.log(completeActions);
  debugger;
  return {
    actions: bindActionCreators(completeActions, dispatch)
  };

}

// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps) (issueDescripePage);

