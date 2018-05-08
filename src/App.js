import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import ProjectsContainer from './Components/ProjectsContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  componentWillMount(){
    //Pull from file for now
    var content = require("./project_data.json");
    this.setState({projects: content.sort((a, b) => parseFloat(b.date) - parseFloat(a.date))});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MyNavbar />
        </header>
        <ProjectsContainer projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
