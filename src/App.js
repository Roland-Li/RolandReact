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
      todos:[]
    }
  }

  loadProjects(){
    this.setState({projects: [
      {
        id:1,
        tags: [ "hackathon" , "social-good" , "website" , "team" ],
        languages_used: [ "C#" ],
        tools_used: [ "Unity", "IBM-Watson" ],
        date: "20170100", //YYYYMMDD. Split and convert manually for display, store like this for easy sorting
        title: 'bridgED',
        project_description: 'Real-time image analysis and language translation, combined with AR, to allow labelling of objects around the user.',
        work_description: '',
        learn_description: '',
        images: [ "bridgED1.png" , "test2.png" ],
        link_git:"",
        link_generic:"https://devpost.com/software/what-s-it"
      },
      {
        id:1,
        tags: [ "hackathon" , "social-good" , "website" , "team" ],
        languages_used: [ "C#" ],
        tools_used: [ "Unity", "IBM-Watson" ],
        date: "20170100", //YYYYMMDD. Split and convert manually for display, store like this for easy sorting
        title: 'bridgED',
        project_description: 'Real-time image analysis and language translation, combined with AR, to allow labelling of objects around the user.',
        work_description: '',
        learn_description: '',
        images: [ "bridgED1.png" , "test2.png" ],
        link_git:"",
        link_generic:"https://devpost.com/software/what-s-it"
      }
    ]});
  }
    
  componentWillMount(){
    this.loadProjects();
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
