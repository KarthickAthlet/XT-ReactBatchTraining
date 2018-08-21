import React, { Component } from "react";
import { Link } from 'react-router-dom';

class issueListingPage extends Component {
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
        if(result.length == 0){
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
    // debugger;
  return (<div>
          <ul>
            {this.state.issues.map((data,index)=> {
              const title = data.title; 
              return(<li key={index}>{title}</li>);
            })}
          </ul>
          </div>);
  }
}

export default issueListingPage;
