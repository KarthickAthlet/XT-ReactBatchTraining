import React, { Component } from "react";
import { Link } from 'react-router-dom';

class RepoListingPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      repoDetails: [],
      userName:""
    }
  }

  // handleClick(clickedRepoName){
    
    // const userName = this.props.repoDetailState.userName; 
    // const repoName = clickedRepoName;   
  // }

  componentDidMount(){

    const gitUserName = this.props.match.params.gitUserName;

    fetch(`https://api.github.com/users/${gitUserName}/repos`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          repoDetails: result,
          userName : gitUserName
        });
        console.log("success", this.state);
        console.log(result);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
        console.log("failed", this.state);
      }
    );
  }

  render() { 
    // console.log(this.state.repoDetails);
    // debugger;
    return (<div>       
      <ul>
        {this.state.repoDetails.map((data,index)=> {
          console.log(data.name); 
          return(<li key={index}><Link to={`repos/${this.state.userName}/${data.name}/issues/`} >{data.name}</Link></li>);
        })}
      </ul>
    </div>);
  }
}

export default RepoListingPage;
