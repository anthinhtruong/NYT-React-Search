import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from "./components/Search"
import Result from "./components/Result"
import Past from "./components/Past"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NYT React</h2>
        </div>
        
        <div>
              <Search></Search>
        </div>

        <div>
              <Result></Result>
        </div>

        <div>
              <Past></Past>
        </div>

      </div>
    );
  }
}

export default App;
