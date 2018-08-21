import React, { Component } from "react";

class RepoListingPage extends Component {
  constructor(props){
    super(props);

    this.state= {
      userName : "",
      repoName : ""
    }    
  }

  handleClick(clickedRepoName){
    
    const userName = this.props.repoDetailState.userName; 
    const repoName = clickedRepoName;
    // console.log(x);
    this.setState({
      userName : userName,
      repoName : repoName
    });

    fetch(`https://api.github.com/repos/${userName}/${repoName}/issues`)
    .then(res => res.json())
    .then(
      (result) => {
        // this.setState({
        //   isLoaded: true,
        //   repoDetails: result,
        //   userName : userName
        // });
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
    console.log(this.props.repoDetailState.repoDetails);
    
    return (<div>       
      <ul>
        {this.props.repoDetailState.repoDetails.map((data,index)=> {
          console.log(data.name); 
          return(<li key={index}> <a href="javascript:void(0);" onClick={this.handleClick.bind(this,data.name,index)}>{data.name}</a></li>);
        })}
      </ul>
    </div>);
  }
}

export default RepoListingPage;
