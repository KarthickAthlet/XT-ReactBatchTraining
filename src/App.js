import React, { Component } from 'react';
import UserDetail from './components/userDetail/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1> Custom Git Viewer </h1>
        </header>
        <section>
          <UserDetail></UserDetail>
        </section>
      </div>
    );
  }
}

export default App;
