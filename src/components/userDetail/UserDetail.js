import React, { Component } from "react";

class UserDetail extends Component {
  render() {
    return (<div> 
      <label htmlFor="gitProfileName">Enter your git profile Id: </label>
      <input type="text" id="gitProfileName" name="gitProfileName"/>
      </div>);
  }
}

export default UserDetail;