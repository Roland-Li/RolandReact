import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/MyNavbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"></link>
          
        <header className="App-header">
        <MyNavbar />
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
      </div>
    );
  }
}

export default App;
