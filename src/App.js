import React, { Component } from 'react';
import Router from './components/Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1> Custom Git Viewer </h1>
        </header>
        <section>
          <Router></Router>
        </section>
      </div>
    );
  }
}

export default App;
