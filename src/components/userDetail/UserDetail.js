import React, { Component } from "react";
import RepoListingPage from '../RepoListingPage/index'

class UserDetail extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      repoDetails: [],
      userName:""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    console.log(this.textInput.value);
    const userName = this.textInput.value;
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          repoDetails: result,
          userName : userName
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
    return (
      <div>
        <div className="getUserDetails"> 
          <label htmlFor="gitProfileName">Enter your git profile Id: </label>
          <input type="text" id="gitProfileName" name="gitProfileName"  ref={(input) => { this.textInput = input; }}/>
          <button type="button" onClick={this.handleSubmit}> search </button>        
       </div>
       <RepoListingPage repoDetailState ={this.state}></RepoListingPage>
      </div>);
  }

}

export default UserDetail;
