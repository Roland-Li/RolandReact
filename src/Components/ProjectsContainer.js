import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import {Grid,Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids
import "./ProjectContainer.css"
//Wireframe 1: https://wireframe.cc/6Buzm0

export default class ProjectsContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.onClickProject = this.onClickProject.bind(this);
        //this.updateSelectedProjects = this.updateSelectedProjects.bind(this);
    
        this.state = {
          searchText: '',
          showSearchWarning: 'False',
          projects: props.projects,
          selectedProjects: props.projects
        };
    } 

    getValidationState() {
        //Check whether or not there are valid projects fitting this,
        //and update the selected projects list accordingly
        const length = this.state.selectedProjects.length;

        if (length == 0){
            if (this.state.showSearchWarning != 'True') {
                this.setState({ showSearchWarning: 'True'});
            }
            return 'error'; 
        }
        else  {
            //Have to if check or else it'll recurse
            if (this.state.showSearchWarning != 'False') {
                this.setState({ showSearchWarning: 'False'});
            }
            return null;
        }
    }

    updateSelectedProjects(newSearchText){
        //Loop through the projects list and select the ones matching the searchText
        var newSelectedProjects = [];
        for (var i = 0, len = this.state.projects.length; i < len; i++) { 
            //Check the title
            if (this.state.projects[i].title.toLowerCase().startsWith(newSearchText)){
                console.log("Matching prefix of title");
                newSelectedProjects.push(this.state.projects[i]);
                continue;
            }

            //Check tags
            for (var j = 0, len2 = this.state.projects[i].tags.length; j < len2; j++){

            }
        }

        //Update
        this.setState({selectedProjects: newSelectedProjects});
    }

    handleSearchChange(e) {
        var newSearchText = e.target.value.toLowerCase();
        this.setState({ searchText: newSearchText });

        if (newSearchText.length > 0){
            //Pass it so it's faster than waiting for updated state value
            this.updateSelectedProjects(newSearchText);
        }
        else {
            //Reset back to showing all
            this.setState({selectedProjects: this.state.projects});
        }
    }

    onClickProject(proj){
        console.log(proj);
    }

    onSubmitSearch(e){
        e.preventDefault();
    }
    
    // id:1,
    // tags: [ "hackathon" , "social-good" , "website" , "team" ],
    // languages_used: [ "C#" ],
    // tools_used: [ "Unity", "IBM-Watson" ],
    // date: "20170100", //YYYYMMDD. Split and convert manually for display, store like this for easy sorting
    // title: 'bridgED',
    // project_description: 'Real-time image analysis and language translation, combined with AR, to allow labelling of objects around the user.',
    // work_description: '',
    // learn_description: '',
    // images: [ "test.png" , "test2.png" ],
    // link_git:"",
    // link_generic:"https://devpost.com/software/what-s-it"
    
    render (){
        const projectObjects = this.state.selectedProjects.map( (proj) => 
            <ProjectItem project={proj} onClickProject={this.onClickProject} />
        );

        return(
           <div>
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                <form onSubmit={this.onSubmitSearch}>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                    <FormControl
                        type="text"
                        value={this.state.searchText}
                        placeholder="Filter projects via title, tags, language, etc"
                        onChange={this.handleSearchChange}
                        onSubmit={(e) => {
                            /**
                            * Prevent submit from reloading the page
                            */
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{ this.state.showSearchWarning == 'True' ? 'No projects match with your query.' : ''} </HelpBlock>
                    </FormGroup>
                </form>
                </Col>
                <Col xs={12} md={12}>
                    {projectObjects}
                </Col>
            </Row>
            </Grid>
           </div> 
        );
    }
}
