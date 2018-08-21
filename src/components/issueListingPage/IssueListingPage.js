import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as completeActions from '../../actions/actionList';
import './../IssueListingPage/IssueListingPage.css';

class IssueListingPage extends Component {
  constructor(props){
    super(props);
    this.state= {
      userName : "",
      repoName : "",
      isIssuePresent: false,
      issues:[]
    }   
  }

  componentDidMount() {
    const gitUserName = this.props.match.params.gitUserName;
    const gitRepoName = this.props.match.params.gitRepoName;
    console.log(gitUserName,gitRepoName);
    fetch(`https://api.github.com/repos/${gitUserName}/${gitRepoName}/issues`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.length === 0){
          this.setState({
            userName: gitUserName,
            repoName: gitRepoName,
            isIssuePresent: false,
            issues:[]      
          });
        } else {
          this.setState({
            userName: gitUserName,
            repoName: gitRepoName ,
            isIssuePresent: true,
            issues: result      
          });
          
          this.props.actions.completeIssueFilter(this.state.issues);
        }
        
        console.log("success", this.state);
        console.log(result);
      },
      (error) => {
        // this.setState({
        //   isLoaded: true,
        //   error
        // });
        console.log("failed", this.state);
      }
    );
  }

  render() {
  return (<div className="IssueListingContainer">
          <ul>
            {this.state.issues.map((data,index)=> {
              const title = data.title; 
              return(<li key={index}><Link to={`/repos/${this.state.userName}/${this.state.repoName}/issues/${data.number}`} >{title}</Link></li>);
            })}
          </ul>         
          </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
      filterIssues: state.filterIssues
  };
}

function mapDispatchToProps(dispatch) {
  console.log(completeActions);
  return {
    actions: bindActionCreators(completeActions, dispatch)
  };
}

// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps) (IssueListingPage);
