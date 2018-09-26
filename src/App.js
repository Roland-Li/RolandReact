import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Child components
import MyNavbar from './Components/MyNavbar';
import ProjectsContainer from './Components/ProjectsContainer';
import ResumeContainer from './Components/ResumeContainer.js';
import ContactContainer from './Components/ContactContainer.js';
import ParticleContainer from './Components/ParticleContainer.js';

//Extras
import animateScrollTo from 'animated-scroll-to';
import {Row,Column} from 'react-bootstrap';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-126492852-1');

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  componentWillMount(){
    //Fire analytics
    ReactGA.pageview(window.location.pathname + window.location.search);

    //Particle js stuff
    // const script = document.createElement("script");
    // script.src = "particles.js";
    // script.type = 'text/javascript';
    // script.async = true;
    // document.body.appendChild(script);


    //Pull from file for now
    var content = require("./Data/project_data.json");
    this.setState({projects: content.sort((a, b) => parseFloat(b.date) - parseFloat(a.date))});
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
        <MyNavbar />
        </header>

        <ParticleContainer/>

        <div className="sectionHeader" id="sectionProjects">
          <h2>Project Portfolio</h2>
        </div>
        <br/>
        <ProjectsContainer projects={this.state.projects}/>
        <br/>

        <div className="sectionHeader" id="sectionResume">
          <h2>Resume</h2>
        </div>
        <br/>
        <ResumeContainer/>
        <br/>

        <div className="sectionHeader" id="sectionContact">
          <h2>Contact Me</h2>
        </div>
        <br/>
        <ContactContainer/>
        <br/>

      </div>
    );
  }
}

export default App;
