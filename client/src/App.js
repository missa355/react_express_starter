import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Search from './components/Search'
import Navbar from 'react-bootstrap/Navbar'


class App extends Component {

  submit = (name) => {
    console.log(name)
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
        <Search submit={this.submit}/>
      </div>
    );
  }
}
export default App;
