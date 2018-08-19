import React, { Component } from "react";

class issueListingPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    fetch("https://api.github.com/users/KarthickAthlet")
      .then(res => res.json())
      .then(
        (result) => {
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
          console.log("success");
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
          console.log("failed");
        }
      );
  }

  render() {
  return (<div>
          <h1>Issue Listing Page</h1> 
          </div>);
  }
}

export default issueListingPage;