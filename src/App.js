import React, { Component } from 'react';
import './App.css';

//Child components
import MyNavbar from './Components/MyNavbar';
import ProjectsContainer from './Components/ProjectsContainer';
import ResumeContainer from './Components/ResumeContainer.js';
import ContactContainer from './Components/ContactContainer.js';

//Extras
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
    //Firebase analytics
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
        
        <div id="particles-js"></div>
        <script src="particles.js"></script>
        <script>
        particlesJS.load('particles-js', './Data/particles.json', 
        function() {
          console.log('callback - particles.js config loaded')
        });

        </script>

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
