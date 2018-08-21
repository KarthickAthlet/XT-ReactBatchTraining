import React, { Component } from "react";
// import RepoListingPage from '../RepoListingPage/index'
import { Link } from 'react-router-dom';
class UserDetail extends Component {

  constructor(props){
    super(props);

    this.state = {
      linkValue : 'default'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    // console.log(this.textInput.value);
    this.setState({
      linkValue : this.textInput.value
    });  
  }

  render() {
    // this.props.routerData ="Unknown";
    return (
      <div>
        <div className="getUserDetails"> 
          <label htmlFor="gitProfileName">Enter your git profile Id: </label>
          <input type="text" id="gitProfileName" name="gitProfileName"  ref={(input) => { this.textInput = input; }} onBlur={this.handleSubmit}/>
          {/* <button type="button" onClick={this.handleSubmit}> search </button>         */}
          <Link to={`/users/${this.state.linkValue}/repos`} >search</Link>
       </div>
       {/* <RepoListingPage repoDetailState ={this.state}></RepoListingPage> */}
      </div>);
  }

}

export default UserDetail;
